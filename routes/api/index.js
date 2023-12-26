// routes/api/index.js

const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../../middleware/auth');

// Route to check if the user is authenticated
router.get('/authenticated', ensureAuthenticated, (req, res) => {
  res.json({ isAuthenticated: true, user: req.user });
});

module.exports = router;
