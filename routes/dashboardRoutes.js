const router = require("express").Router()
const{dashboardView, homeAdmin, renderfullPost, updatePost} = require("../controllers/dashboardController")
router.get("/", dashboardView)
router.get("/home-admin", homeAdmin)
router.get("/fullpostview/:id", renderfullPost)
router.post("/post/update/:id", updatePost);

module.exports = router