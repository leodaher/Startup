var jwt = require('jsonwebtoken'),
    config = require('../config');

// Generate an Access Token for the given User ID
function generateAccessToken(userId) {
  // How long will the token be valid for
  var expiresIn = '1 hour';
  // Which service issued the token
  var issuer = config.get('authentication.token.issuer');
  // Which service is the token intended for
  var audience = config.get('authentication.token.audience');
  // The signing key for signing the token
  var secret = config.get('authentication.token.secret');

  var token = jwt.sign({}, secret, {
    expiresIn: expiresIn,
    audience: audience,
    issuer: issuer,
    subject: userId.toString()
  });

  return token;
}
