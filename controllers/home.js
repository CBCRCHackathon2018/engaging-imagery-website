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
  const { userId } = req.params;
  console.log("userId: " + userId)
  if (userId) {
    axios
      .get("https://5791b5f1.ngrok.io/shows/moto")
      .then(response => {
        console.log(response.status)
        res.render('engaging-imagery', {
          title: 'Landing Page', 
          data: response.status
        })
      })
  } else {
      res.render('engaging-imagery', {
        title: 'Landing Page'
      });
  }
};
