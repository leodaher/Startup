var express = require("express"),
    passport = require("passport"),
    controllers = require("./controllers/index");
    app = express();

require("./authentication/cliente/jwt");

// Initialize passport as authentication system
app.use(passport.initialize());

// Requiring the routes
app.use(controllers);

app.listen(3000, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Listening on port 3000...");
  }
})
