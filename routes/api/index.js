// routes/api/index.js

const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../../middleware/auth');
const commentRoutes = require('./comment-routes');

// Route to check if the user is authenticated
router.get('/authenticated', ensureAuthenticated, (req, res) => {
  res.json({ isAuthenticated: true, user: req.user });
});

// Include comment-related routes
router.use('/comment', commentRoutes);

module.exports = router;
