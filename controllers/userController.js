// userController.js

const bcrypt = require('bcrypt');
const db = require('../models');

const renderSignUp = (req, res) => {
  res.render('signup');
};

const handleSignUp = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = await db.User.create({
      username,
      password: hashedPassword,
    });

    // Redirect to the homepage or any other desired page after successful sign-up
    res.redirect('/');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  renderSignUp,
  handleSignUp,
};
