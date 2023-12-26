const db = require('../models');

const renderHomepage = async (req, res) => {
  try {
    // Fetch existing blog posts from the database
    const blogPosts = await db.Post.findAll({
      include: [
        {
          model: db.User,
          attributes: ['username'], // Include the username of the post creator
        },
      ],
    });

    // Pass the data to the home.handlebars template for rendering
    res.render('home', { blogPosts });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  renderHomepage,
};
