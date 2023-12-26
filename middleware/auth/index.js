// middleware/auth/index.js

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/signin');
};

module.exports = { ensureAuthenticated };
