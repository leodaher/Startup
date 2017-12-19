var bcrypt = require("bcrypt"),
    Cliente = require("../../models/Cliente");

module.exports = function(req, res) {

  // Getting body fields
  var email = req.body.email,
      realpassword = req.body.password,
      facebook_id = req.body.facebook_id,
      facebook_token = req.body.facebook_token,
      nome = req.body.nome,
      cpf = req.body.cpf,
      fone = req.body.fone,
      dtNasc = req.body.dtNasc;

  // Check if email or password are empty
  if(!email || email == "") {

    res.status(400).json({
      message: "Erros de validação",
      errors: [
        {
          message: "O campo está vazio",
          code: 34,
          field: "email"
        }
      ]
    });
  } else if(!realpassword || realpassword == "") {

    res.status(400).json({
      message: "Erros de validação",
      errors: [
        {
          message: "O campo está vazio",
          code: 34,
          field: "password"
        }
      ]
    });
  } else {

    // Checking if email already exists
    Cliente.find({ email: email}, function(err, results) {
      if(err) {
        res.status(500).json({ message: err });
      } else {
        if(results.length > 0) {
          res.status(400).json({
            message: "Erros de validação",
            errors: [
              {
                message: "E-mail já cadastrado",
                code: 35,
                field: "email"
              }
            ]
          });
        } else {

          // Hashing password for security
          bcrypt.hash(realpassword, 10, function(err, password) {
            if(err) {
              res.status(500).json({ message: err });
            } else {
              var cliente = new Cliente({
                email: email,
                password: password,
                facebook: {
                  id: facebook_id,
                  token: facebook_token
                },
                nome: nome,
                cpf: cpf,
                fone: fone,
                dtNasc: dtNasc
              });

              // Saving new client
              cliente.save(function(err){
                if(err) {
                  console.log(err);
                  res.status(500).json({ message: err });
                } else {
                  res.status(201).json({ message: "O cliente foi criado com sucesso." });
                }
              });
            }
          });
        }
      }
    });
  }
};
