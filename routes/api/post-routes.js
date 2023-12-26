// routes/api/index.js

const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../../middleware/auth');
const commentRoutes = require('./comment-routes');
const postRoutes = require('./post-routes');
const postController = require('../../controllers/postController');

// Route to check if the user is authenticated
router.get('/authenticated', ensureAuthenticated, (req, res) => {
  res.json({ isAuthenticated: true, user: req.user });
});

// Include comment-related routes
router.use('/comment', commentRoutes);

// Include blog post-related routes
router.use('/post', postRoutes);

// Route to update a blog post
router.post('/update/:id', ensureAuthenticated, postController.updatePost);

// Route to delete a blog post
router.post('/delete/:id', ensureAuthenticated, postController.deletePost);

module.exports = router;
