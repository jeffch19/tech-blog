// controllers/postController.js

const db = require('../models');

const renderSinglePost = async (req, res) => {
  try {
    // Fetch the single blog post and its associated comments
    const singlePost = await db.Post.findByPk(req.params.id, {
      include: [
        { model: db.User, attributes: ['username'] },
        { model: db.Comment, include: [{ model: db.User, attributes: ['username'] }] },
      ],
    });

    // Render the single post view
    res.render('post', { singlePost });
  } catch (error) {
    console.error('Error fetching single blog post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  renderSinglePost,
};
