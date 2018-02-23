// Dependencies
// =============================================================
var path = require("path");

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
console.log(req.isAuthenticated());
  res.redirect('/');
}
// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // login and signup page for app
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

// forgot login credentials page
  app.get("/forgot", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/forgotcode.html"));
  });

  //user's page
  app.get("/home",isLoggedIn, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};
