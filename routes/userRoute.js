const {
    addUser,
    updateUser,
    deleteUser,
    autoDelete,
  } = require("../controllers/userController")
  const { protectUser, protectAdmin } = require("../middlewares/Protect")
  const userRouter = require("express").Router()
  
  userRouter
    .post("/add", addUser)
    .put("/update", protectUser, updateUser)
    .delete("/delete/:id", protectAdmin, deleteUser)
    .delete("/delete", protectUser, autoDelete)
  
  module.exports = userRouter