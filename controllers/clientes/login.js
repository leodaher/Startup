var bcrypt = require("bcrypt"),
    token = require("../../authentication/token"),
    Cliente = require("../../models/Cliente");

module.exports = function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  Cliente.findOne({ email: email }, function(err, cliente) {
    if(err) {
      res.status(500).json({ message: err });
    } else {
      if(!cliente) {
        res.status(400).json({ message: "Usuário não existente" });
      } else {
        bcrypt.compare(password, cliente.password, function(err, resPass){
          if(err) {
            res.status(500).json({ message: err });
          } else {
            if(!resPass) {
              res.status(400).json({ message: "Senha errada" });
            } else {
              var tok = token.generateAccessToken(cliente._id);
              res.status(200).json({ message: "O usuário existe", token: tok });
            }
          }
        })
      }
    }
  })
};
