// routes/api/index.js

const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../../middleware');
const commentRoutes = require('./comment-routes');
const postRoutes = require('./post-routes');

// Route to check if the user is authenticated
router.get('/authenticated', ensureAuthenticated, (req, res) => {
  res.json({ isAuthenticated: true, user: req.user });
});

// Include comment-related routes
router.use('/comment', commentRoutes);

// Include blog post-related routes
router.use('/post', postRoutes);

module.exports = router;
