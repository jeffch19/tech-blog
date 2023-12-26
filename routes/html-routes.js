// html-routes.js

const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware');
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');

// Homepage route
router.get('/', ensureAuthenticated, homeController.renderHomepage);

// Dashboard route
router.get('/dashboard', ensureAuthenticated, dashboardController.renderDashboard);

// Sign-up route
router.get('/signup', userController.renderSignUp);

// Sign-in route
router.get('/signin', userController.renderSignIn);

module.exports = router;
