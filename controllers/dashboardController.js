// controllers/dashboardController.js

const db = require('../models');
// const router = require("express").Router() 

const renderDashboard = async (req, res) => {
  try {
    // Fetch blog posts created by the logged-in user
    const userBlogPosts = await db.Post.findAll({
      where: { UserId: req.user.id },
      order: [['createdAt', 'DESC']],
    });

    // Render the dashboard with the user's blog posts
    res.render('dashboard', { userBlogPosts });
  } catch (error) {
    console.error('Error fetching user blog posts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = router
