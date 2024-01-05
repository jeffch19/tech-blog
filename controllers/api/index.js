const router = require("express").Router()
const userController = require("./userController.js")
const commentController = require("./commentController.js")
const postController = require("./postController.js")
router.use("/user", userController)
router.use("/post", postController)
router.use("/comment", commentController)
module.exports = router