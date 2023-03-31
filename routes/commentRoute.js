const {
  getCommentsByProgramme,
  addComment,
  updateComment,
  deleteComment,
  replyToComment
} = require("../controllers/commentController")

const commentRouter = require("express").Router()

commentRouter
  .get("/:idLivre", getCommentsByProgramme)
  .post("/:idLivre", addComment)
  .put("/:commentId", updateComment)
  .delete("/:commentId", deleteComment)
  .post("/:commentId/reply", replyToComment)

module.exports = commentRouter