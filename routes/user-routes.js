// user-routes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { ensureAuthenticated } = require('../middleware');

// User registration route
router.post('/signup', userController.handleSignUp);

module.exports = router;
