// controllers/homeController.js
const router = require("express").Router()
router.get("/", async (req, res )=> {
  try {
    res.render("home")
  } catch (err) {
    res.status(500).json(err)
  }
})
router.get("/signup", async(req, res) =>{
  try {
    res.render("signup")
  } catch (error) {
    res.status(500).json(error)
  }
})
router.get("/signin", async(req, res) =>{
  try {
    res.render("signin")
  } catch (error) {
    res.status(500).json(error)
  }
})
// const renderHomepage = async (req, res) => {
//   try {
//     // Fetch existing blog posts from the database
//     const blogPosts = await db.Post.findAll({
//       include: [{ model: db.User, attributes: ['username'] }],
//       order: [['createdAt', 'DESC']],
//     });

//     // Render the homepage with blog post data
//     res.render('home', { blogPosts });
//   } catch (error) {
//     console.error('Error fetching blog posts:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// module.exports = {
//   renderHomepage,
// };
module.exports = router