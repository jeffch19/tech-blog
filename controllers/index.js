const router = require("express").Router()
const homeController = require("./homeController.js")
const apiRoutes = require("./api/")
router.use("/", homeController)
router.use("/api", apiRoutes)
module.exports = router