const router = require("express").Router()
const{dashboardView, homeAdmin, renderfullPost} = require("../controllers/dashboardController")

router.get("/", dashboardView)
router.get("/home-admin", homeAdmin)
router.get("/fullpostview/:id", renderfullPost)





module.exports = router