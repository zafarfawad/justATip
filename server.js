// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var passport = require('passport');
var session = require('express-session');
var exphbs = require('express-handlebars');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3002;

var db = require("./models");
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'team JAT', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
require('./config/Passport/passport.js')(passport, db.user);
// ================================================================================
// Express.static will allow you to set a static directory for things like your
// front end javascript, images, etc
// ================================================================================
app.use(express.static(path.join(__dirname, "public")));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./routing/apiRoutes")(app, passport);
require("./routing/htmlRouter")(app, passport);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
db.sequelize.sync({ force: true }).then(function () {

    app.listen(PORT, function () {
        console.log("App listening on PORT: " + PORT);

    });
});