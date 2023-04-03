const categorieModel = require("../models/categorieModel")
const expressAsyncHandler = require("express-async-handler")

//Afficher toustes les categories
exports.getAllCategories = expressAsyncHandler(async (req, res) => {
  try {
    const categories = await categorieModel.find()
    console.log(req.user)
    res.status(200).json(categories)
  } catch (error) {
    res.status(400)
    console.error(error)
  }
})

//Ajouter une categorie
exports.postCategorie = expressAsyncHandler(async (req, res) => {
  try {
    const { nom } = req.body
    if (!nom) {
      res.status(400).json("you need to add a name to your category")
    }

    await categorieModel.create({
      nomcategorie: nom,
    })
    res.status(201).json("Categorie created")
  } catch (error) {
    res.status(400)
    console.log(error)
  }
})

// Supprimer une categorie :
exports.deleteCategorie = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.params.id
    await categorieModel.findByIdAndDelete(id)
    res.status(201).json("Categorie supprimé avec succes !! ")
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})

// Modifier une categorie :

exports.updateCategorie = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.params.id
    const Resultat = await categorieModel.findByIdAndUpdate(id, req.body)
    if (!Resultat) {
      return res.status(404).json("La catégorie n'existe pas")
    }
    res.status(201).json("Catégorie Modifiée !! ")
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})
