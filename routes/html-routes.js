const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware'); // Import your authentication middleware if available
const homeController = require('../controllers/homeController');

// Homepage route
router.get('/', ensureAuthenticated, homeController.renderHomepage);

module.exports = router;
