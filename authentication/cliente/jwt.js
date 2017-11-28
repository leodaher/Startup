var passport = require("passport"),
    passportJwt = require("passport-jwt"),
    config = require("../../config"),
    Cliente = require("../../models/Cliente");

var jwtOptions = {
  // Get the JWT from the "Authorization" header.
  // By default, this looks for a JWT prefix
  jwtFromRequest: passportJwt.ExtractJwt.fromHeader("Authorization"),
  // The secret that was used to sign the JWT
  secretOrKey: config.get("authentication.token.secret"),
  // The issuer stored in the JWT
  issuer: config.get("authentication.token.issuer"),
  // The audience stored in the JWT
  audience: config.get("authentication.token.audience")
};

passport.use(new passportJwt.Strategy(jwtOptions, function(payload, done) {
  Cliente.findOne({id: payload.sub}, function(err, cliente){
    if(err) {
      console.log(err);
      return done();
    } else {
      return done(null, cliente, payload);
    }
  })
}))
