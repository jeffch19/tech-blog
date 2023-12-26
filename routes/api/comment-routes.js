// routes/api/comment-routes.js

const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../../middleware/auth');
const commentController = require('../../controllers/commentController');

// Route to add a comment
router.post('/:id', ensureAuthenticated, commentController.addComment);

module.exports = router;
