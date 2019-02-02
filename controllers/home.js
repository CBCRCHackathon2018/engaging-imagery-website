const axios = require('axios');

/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.escapeVelocity = (req, res) => {
  axios
    .get("https://5791b5f1.ngrok.io/shows/moto")
    .then(response => console.log(response))
  res.render('engaging-imagery', {
    title: 'Landing Page'
  });
};
