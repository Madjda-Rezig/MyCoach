const programmeModel = require("../models/ProgrammeModel")
const UserModel = require("../models/userModel")
const expressAsyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");

//Afficher touts les Programmes

exports.getAllProgrammes = expressAsyncHandler(async (req, res) => {
  try {
    const { categorie, coach, note, nombreExercices } = req.query;

    // ajout d'un filtre
    const filter = {};
    if (categorie) {
      filter.IdCategorie = categorie;
    }
    if (coach) {
      filter.coach = coach;
    }
    if (note) {
      filter.note = note;
    }
    if (nombreExercices) {
      filter.nombreExercices = nombreExercices;
    }

    const programmes = await programmeModel.find(filter);
    res.status(200).json(programmes);
  } catch (error) {
    res.status(400).json({ message: "une erreur est survenu lors de votre recherche" });
    console.error(error);
  }
});


//Ajouter un Programme
exports.postProgramme = expressAsyncHandler(async (req, res) => {
  try {
    const {  nomProgramme, coach ,note,IdCategorie,nombreExerices,disponible} =
      req.body
    if (
      !nomProgramme ||
      !note ||
      !nombreExerices ||
      !coach 
    ) {
      
      res.status(400).json("Impossible d'ajouter le Programme !!")
    }
    const users = await UserModel.find()

    await programmeModel.create({
        nomProgramme, 
        coach ,
        note,
        IdCategorie,
        nombreExerices,
    })
    
    const utilisateurs = await UserModel.find()
    console.log(utilisateurs)
    utilisateurs.forEach( users => {
      // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
  
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'bethel.renner22@ethereal.email',
        pass: '7JnWC2hJSfnbBQgbW2'
      }
  });
  
    // send mail with defined transport object
    let info =  transporter.sendMail({
      from: 'rezigmadjda@gmail.com', // sender address
      to: users.mail, // list of receivers
      subject: "Hello ", // Subject line
      text: `Nouveau Programme sportif ajouté a notre site  ${programmeModel.nomPogramme}`, // plain text body
    },
    function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log("Email sent: " + info.response)
      }
    })
    })
    res.status(201).json("Le Programme sportif a été ajouté a MyCoach !")
  } catch (error) {
    res.status(400)
    console.log(error)
  }
})

// Supprimer un Programme :
exports.deleteProgramme = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.params.id
    await programmeModel.findByIdAndDelete(id)
    res.status(201).json("Vous avez supprimé ce Programme ")
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})