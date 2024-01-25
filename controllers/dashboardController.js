// controllers/dashboardController.js

const db = require('../models');


const dashboardView =  async (req, res) => {
  
  try {
    // Fetch blog posts created by the logged-in user
    userId = req.session.userId
    const userBlogPosts = await db.Post.findAll({
      where: { 
       userId
      },
      
    });
   const what = {userId: req.session.userId}
   console.log(what)
   console.log( "raw data", userBlogPosts)
   let posts = [];
   if (userBlogPosts.length > 0) {
     posts = userBlogPosts.map((post) => post.get({plain:true}))
   }
    
    
    // Render the dashboard with the user's blog posts
    console.log("this is the user posts", posts)
    res.render('profile', { layout: "dashboard", posts });
  } catch (error) {
    console.error('Error fetching user blog posts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const homeAdmin = async (req, res) => {
  try {
    const blogPosts = await db.Post.findAll({
      include: [{ model: db.User, as: 'author', attributes: ['username'] }],
      order: [['createdAt', 'DESC']],
    });
  console.log("blog post data---------------------------------",blogPosts);
    // Render the homepage with blog post data
    res.render('home', { layout: "dashboard", blogPosts });
  } catch (error) {
    console.error('Error fetching user blog posts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
const renderfullPost = async (req, res) => {
  try { 
    const postData = await db.Post.findByPk(req.params.id)
    if (postData){

      const post = postData.get({plain :true})
      res.render("update-post", {layout: "dashboard", post })
    }
    
  } catch (error) {
    console.error('Error fetching user blog posts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  
}


module.exports = {
  dashboardView,
  homeAdmin,
  renderfullPost
}