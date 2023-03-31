const {
    Login,
    refreshAccess,
    logout,
  } = require("../controllers/authController")
  
  const authRouter = require("express").Router()
  const { protectUser } = require("../middlewares/Protect")
  authRouter
    .post("/login", Login)
    .post("/token", protectUser, refreshAccess)
    .delete("/token", protectUser, logout)
  
  module.exports = authRouter
  