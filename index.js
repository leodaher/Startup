var express = require("express"),
    passport = require("passport"),
    mongoose = require("mongoose"),
    routes = require("./routes"),
    bodyParser = require("body-parser"),
    app = express();

// Connect to database
mongoose.connect('mongodb://localhost/startup');

// Initialize passport as authentication system
app.use(passport.initialize());

// BodyParser
app.use(bodyParser.urlencoded({ extended: true }));

// Requiring the routes
app.use(routes);

app.listen(3000, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Listening on port 3000...");
  }
})
