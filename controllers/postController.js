// controllers/postController.js

const db = require('../models');

const renderUpdatePost = async (req, res) => {
  try {
    // Fetch the blog post to update
    const postToUpdate = await db.Post.findByPk(req.params.id);

    // Check if the logged-in user is the creator of the post
    if (postToUpdate && postToUpdate.UserId === req.user.id) {
      res.render('update-post', { postToUpdate });
    } else {
      // Redirect to the user's dashboard if unauthorized to update the post
      res.redirect('/dashboard');
    }
  } catch (error) {
    console.error('Error fetching post to update:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Update the blog post in the database
    await db.Post.update(
      { title, content },
      { where: { id: req.params.id, UserId: req.user.id } }
    );

    // Redirect to the user's dashboard after updating the post
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Error updating blog post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const renderDeletePost = async (req, res) => {
  try {
    // Fetch the blog post to delete
    const postToDelete = await db.Post.findByPk(req.params.id);

    // Check if the logged-in user is the creator of the post
    if (postToDelete && postToDelete.UserId === req.user.id) {
      res.render('delete-post', { postToDelete });
    } else {
      // Redirect to the user's dashboard if unauthorized to delete the post
      res.redirect('/dashboard');
    }
  } catch (error) {
    console.error('Error fetching post to delete:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deletePost = async (req, res) => {
  try {
    // Delete the blog post from the database
    await db.Post.destroy({ where: { id: req.params.id, UserId: req.user.id } });

    // Redirect to the user's dashboard after deleting the post
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Error deleting blog post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  renderSinglePost,
  renderNewPost,
  createPost,
  renderUpdatePost,
  updatePost,
  renderDeletePost,
  deletePost,
};
