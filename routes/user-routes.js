// user-routes.js

const express = require('express');
const passport = require('passport');
const router = express.Router();
const userController = require('../controllers/userController');
const { ensureAuthenticated } = require('../middleware');

// User registration route
router.post('/signup', userController.handleSignUp);

// User sign-in route using Passport.js
router.post(
  '/signin',
  passport.authenticate('local', {
    successRedirect: '/', // Redirect to the homepage after successful sign-in
    failureRedirect: '/signin', // Redirect to the sign-in page if authentication fails
  })
);

module.exports = router;
