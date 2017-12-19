var bcrypt = require("bcrypt"),
    Entregador = require("../../models/Entregador");

module.exports = function(req, res){

  var email = req.body.email,
      realpassword = req.body.password,
      nome = req.body.nome,
      dtNasc = req.body.dtNasc,
      cpf = req.body.cpf,
      fone = req.body.fone,
      comprovanteResid = req.body.comprovanteResid,
      cnh = req.body.cnh,
      clrv = req.body.clrv;

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
  } else if(!realpassword || realpassword == ""){
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
    Entregador.find({ email: email}, function(err, results) {
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
              var entregador = new Entregador({
                email: email,
                password: password,
                nome: nome,
                dtNasc: dtNasc,
                cpf: cpf,
                fone: fone,
                comprovanteResid: comprovanteResid,
                cnh: cnh,
                clrv: clrv
              });

              // Saving new entregador
              entregador.save(function(err){
                if(err) {
                  console.log(err);
                  res.status(500).json({ message: err });
                } else {
                  res.status(201).json({ message: "O entregador foi criado com sucesso." });
                }
              });
            }
          });
        }
      }
    });
  }
};
