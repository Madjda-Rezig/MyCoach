const { getAllProgrammes, postProgramme,deleteProgramme} = require("../controllers/programmeController")


const programmeRouter = require("express").Router()

programmeRouter.get("/all", getAllProgrammes).post("/add", postProgramme).delete("/:id",deleteProgramme)

module.exports = programmeRouter