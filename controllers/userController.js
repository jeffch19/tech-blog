// controllers/userController.js

const passport = require('passport');
const db = require('../models');
const bcrypt = require('bcrypt');

const renderSignUp = (req, res) => {
  res.render('signup');
};

const renderSignIn = (req, res) => {
  res.render('signin');
};

const signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    await db.User.create({
      username,
      password: hashedPassword,
    });

    // Redirect to the login page after successful signup
    res.redirect('/signin');
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const signin = passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/signin',
  failureFlash: true,
});

const logout = (req, res) => {
  // Passport.js provides a logout() method on the request object
  req.logout();

  // Redirect the user to the homepage after logout
  res.redirect('/');
};

module.exports = {
  renderSignUp,
  renderSignIn,
  signup,
  signin,
  logout,
};
