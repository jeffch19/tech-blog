// server.js

const express = require('express');
const passport = require('passport');
const session = require('express-session');

const app = express();

// Middleware for session management
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Include passport-config.js file
require('./config/passport-config');

// Include routes
const htmlRoutes = require('./routes/html-routes');
const userRoutes = require('./routes/user-routes');

app.use('/', htmlRoutes);
app.use('/user', userRoutes); // Adjust the base path if needed



// Start  server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
