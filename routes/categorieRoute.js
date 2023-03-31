const {
    getAllCategories,
    postCategorie,
    deleteCategorie,
    updateCategorie,
  } = require("../controllers/categorieController")
  const categorieRoute = require("express").Router()
  const { protectAdmin, protectUser } = require("../middlewares/Protect")
  categorieRoute
    .get("/all", protectUser, getAllCategories)
    .post("/add", protectAdmin, postCategorie)
    .delete("/:id", protectAdmin, deleteCategorie)
    .put("/:id", protectAdmin, updateCategorie)

  module.exports = categorieRoute
  