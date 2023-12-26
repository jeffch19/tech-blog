const db = require('../models');

const renderDashboard = async (req, res) => {
  try {
    // Fetch user-specific blog posts from the database
    const userPosts = await db.Post.findAll({
      where: { UserId: req.user.id }, // Assuming your user is stored in req.user after authentication
    });

    // Pass the data to the dashboard.handlebars template for rendering
    res.render('dashboard', { userPosts });
  } catch (error) {
    console.error('Error fetching user posts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  renderDashboard,
};
