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
      .get("http://ec2-18-222-165-64.us-east-2.compute.amazonaws.com:5000/shows/" + userId)
      .then(response => {
        //console.log(response.status)
        res.render('engaging-imagery', {
          title: 'Landing Page', 
          data: response.data
        })
      })
  } else {
      res.render('engaging-imagery', {
        title: 'Landing Page'
      });
  }
};
