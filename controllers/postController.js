const db = require('../models');

const renderSinglePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await db.Post.findByPk(postId, { include: db.User }); // Assuming a User association exists
    res.render('single-post', { post });
  } catch (error) {
    console.error('Error rendering single post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const renderNewPost = (req, res) => {
  res.render('new-post');
};

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Assuming user is authenticated and req.user contains user information
    const newPost = await db.Post.create({
      title,
      content,
      UserId: req.user.id,
    });

    res.redirect(`/post/${newPost.id}`);
  } catch (error) {
    console.error('Error creating new post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const renderUpdatePost = async (req, res) => {
  try {
    const postToUpdate = await db.Post.findByPk(req.params.id);
    if (postToUpdate && postToUpdate.UserId === req.user.id) {
      res.render('update-post', { postToUpdate });
    } else {
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
    await db.Post.update(
      { title, content },
      { where: { id: req.params.id, UserId: req.user.id } }
    );
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Error updating blog post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const renderDeletePost = async (req, res) => {
  try {
    const postToDelete = await db.Post.findByPk(req.params.id);
    if (postToDelete && postToDelete.UserId === req.user.id) {
      res.render('delete-post', { postToDelete });
    } else {
      res.redirect('/dashboard');
    }
  } catch (error) {
    console.error('Error fetching post to delete:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deletePost = async (req, res) => {
  try {
    await db.Post.destroy({ where: { id: req.params.id, UserId: req.user.id } });
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
