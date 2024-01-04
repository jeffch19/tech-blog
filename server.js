const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const exphbs = require('express-handlebars'); // Add this line
const path = require('path');
const db = require('./models');
const htmlRoutes = require('./routes/html-routes');
const userRoutes = require('./routes/user-routes');

const app = express();

// Middleware for session management
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize bcrypt
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Use bcrypt for user authentication
app.post('/user/signin', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user in the database using Sequelize
    const user = await db.User.findOne({
      where: { username },
    });

    if (user) {
      // Compare the entered password with the hashed password stored in the database
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (isPasswordMatch) {
        // Successfully logged in, set user information in the session
        req.session.user = {
          id: user.id,
          username: user.username,
        };

        res.redirect('/dashboard');
      } else {
        // Passwords do not match
        res.redirect('/signin');
      }
    } else {
      // User not found
      res.redirect('/signin');
    }
  } catch (error) {
    console.error('Error finding user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Include routes
app.use('/', htmlRoutes);
app.use('/user', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
