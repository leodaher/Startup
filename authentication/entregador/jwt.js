var jwt = require("jsonwebtoken"),
    config = require("../../config"),
    Entregador = require("../../models/Entregador");


module.exports = function(req, res, next) {
  var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers["x-access-token"];
  var secret = config.get("authentication.token.secret");

  if(token) {
    jwt.verify(token, secret, function(err, decoded) {
      if(err) {
        res.status(500).json({ message: err });
      } else {
        if(decoded.exp*1000 <= Date.now()) {
          res.status(400).json({ message: "Token de acesso expirado" });
        } else {
          Entregador.findOne({ _id: decoded.sub }, function(err, user) {
            res.user = user;
            next();
          })
        }
      }
    });
  } else {
    res.status(401).json({ message: "Acesso não autorizado" });
  }
}
