const {
    getAllCategories,
    postCategorie,
    deleteCategorie,
    updateCategorie,
  } = require("../controllers/categorieController")
  const categorieRoute = require("express").Router()
  const { protectAdmin, protectUser } = require("../middlewares/Protect")
  categorieRoute
    .get("/all", getAllCategories)
    .post("/add", postCategorie)
    .delete("/:id", deleteCategorie)
    .put("/:id", updateCategorie)

  module.exports = categorieRoute
  