const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware');
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');

// Homepage route
router.get('/', ensureAuthenticated, homeController.renderHomepage);

// Dashboard route
router.get('/dashboard', ensureAuthenticated, homeController.renderDashboard);

// Sign-up route
router.get('/signup', userController.renderSignUp);

// Sign-in route
router.get('/signin', userController.renderSignIn);

// Single blog post route
router.get('/post/:id', ensureAuthenticated, postController.renderSinglePost);

// New blog post route
router.get('/post/new', ensureAuthenticated, postController.renderNewPost);

// Logout route
router.get('/logout', userController.logout);

module.exports = router;
