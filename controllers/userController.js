const renderSignUp = (req, res) => {
  res.render('signup');
};

const renderSignIn = (req, res) => {
  res.render('signin');
};

module.exports = {
  renderSignUp,
  renderSignIn,
};
