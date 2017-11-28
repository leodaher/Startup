var convict = require("convict");

var config = convict({
  authentication: {
    token: {
      secret: {
        doc: "The signing key for the JWT",
        default: "basketball1998",
      },
      issuer: {
        doc: "The issuer for the JWT",
        default: "my-startup"
      },
      audience: {
        doc: "The audience for the JWT",
        default: "my-startup"
      }
    }
  }
});

config.validate();

module.exports = config;
