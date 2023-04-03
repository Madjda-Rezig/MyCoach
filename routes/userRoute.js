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
    .put("/update", updateUser)
    .delete("/delete/:id", deleteUser)
    .delete("/delete", autoDelete)
  
  module.exports = userRouter