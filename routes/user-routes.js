const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User registration route
router.post('/signup', userController.handleSignUp);

// User sign-in route using bcrypt
router.post('/signin', userController.handleSignIn);

module.exports = router;
