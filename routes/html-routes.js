const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware'); // Import your authentication middleware if available
const homeController = require('../controllers/homeController');

// Homepage route
router.get('/', ensureAuthenticated, homeController.renderHomepage);

// Dashboard route (Assuming you have a dashboardController)
router.get('/dashboard', ensureAuthenticated, dashboardController.renderDashboard);

// Sign-up route
router.get('/signup', userController.renderSignUp);

// Sign-in route
router.get('/signin', userController.renderSignIn);

module.exports = router;
