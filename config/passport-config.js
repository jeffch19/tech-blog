// passport-config.js

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require('../models');

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      // Find the user in the database
      const user = await db.User.findOne({
        where: { username },
      });

      // If the user is not found or the password is incorrect, return failure
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return done(null, false, { message: 'Incorrect username or password' });
      }

      // If authentication is successful, return the user
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
