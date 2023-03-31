const express = require("express")
const mongoose = require("mongoose")
const ErrorHandler = require("./middlewares/ErrorHandler")

const authRouter = require("./routes/authRoute")
const categorieRouter = require("./routes/categorieRoute")
const userRouter = require("./routes/userRoute")

require("dotenv").config()

const index = express()
index.use(express.json())
index.use(express.urlencoded({ extended: true }))


index.use("/auth", authRouter)
index.use("/categorie", categorieRouter)
index.use("/user", userRouter)

index.use("/*", (req, res) => {
  res.status(404).json("Not found!")
})
index.use(ErrorHandler)

mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => {
    index.listen(process.env.PORT, () => {
      console.log(" The Server for MyCoach App is running")
    })
  })
  .catch((err) => console.log(err))
