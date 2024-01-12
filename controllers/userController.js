const bcrypt = require('bcrypt');
const db = require('../models');
const router = require("express").Router()
const renderSignUp = (req, res) => {
  res.render('signup');
};



const handleSignUp = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    await db.User.create({
      username,
      password: hashedPassword,
    });
    console.log('User signed up:', username);
    // Redirect to the login page after successful signup
    res.redirect('/signin');
  } catch (error) {
    console.error('Error during signup:', error);

    // Render the error page or provide a flash message to the user
    res.status(500).render('error', { error: 'Internal Server Error' });
  }
};

const handleSignIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await db.User.findOne({ where: { username } });

    if (user) {
      // Compare the entered password with the hashed password stored in the database
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (isPasswordMatch) {
        // Successfully logged in, set user information in the session (optional)
        req.session.user = {
          id: user.id,
          username: user.username,
        };
        console.log('User logged in:', username);
        // Redirect to the dashboard or any other authenticated route
        res.redirect('/dashboard');
      } else {
        // Passwords do not match
        // Render the error page or provide a flash message to the user
        res.render('error', { error: 'Incorrect username or password' });
      }
    } else {
      // User not found
      // Render the error page or provide a flash message to the user
      res.render('error', { error: 'User not found' });
    }
  } catch (error) {
    console.error('Error during login:', error);

    // Render the error page or provide a flash message to the user
    res.status(500).render('error', { error: 'Internal Server Error' });
  }
};

const logout = (req, res) => {
  // Clear user information from the session 
  const username = req.session.user ? req.session.user.username : 'Unknown';
  console.log('User logged out:', username);
  req.session.user = null;

  // Redirect to the home page or any other route
  res.redirect('/');
};

module.exports = {
  renderSignUp,
  handleSignUp,
  handleSignIn,
  logout,
};
