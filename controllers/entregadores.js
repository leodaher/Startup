var express = require("express"),
    bcrypt = require("bcrypt"),
    Entregador = require("../models/Entregador"),
    router = express.Router();

/*
---------- INDEX - list all entregadores ------------
*/
router.get("/", function(req, res){
  Entregador.find(function(err, entregadores){
    if(err) {
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({ entregadores: entregadores });
    }
  })
});

/*
---------- CREATE - create new entregador ------------
*/
router.post("/", function(req, res){

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
});

/*
----------- SHOW - return specific entregador ---------
*/
router.get("/:id", function(req, res){
  Entregador.findOne({ _id: req.params.id }, function(err, entregador){
    if(err) {
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({ entregador: entregador });
    }
  })
});

/*
----------- UPDATE - update specific entregador -------
*/
router.put("/:id", function(req, res){
  Entregador.findOne({ _id: req.params.id }, function(err, entregador){
    if(err) {
      res.status(500).json({ message: err });
    } else {
      entregador.nome = req.body.nome || entregador.nome;
      entregador.cpf = req.body.cpf || entregador.cpf;
      entregador.fone = req.body.fone || entregador.fone;
      entregador.dtNasc = req.body.dtNasc || entregador.dtNasc;
      entregador.comprovanteResid = req.body.comprovanteResid || entregador.comprovanteResid;
      entregador.cnh = req.body.cnh || entregador.cnh;
      entregador.clrv = req.body.clrv || entregador.clrv;

      entregador.save(function(err, updatedEntregador) {
        if(err) {
          res.status(500).json({ message: err });
        } else {
          res.status(200).json({ entregador: updatedEntregador });
        }
      })
    }
  })
});

/*
------------ DELETE - remove specific client
*/
router.delete("/:id", function(req, res) {
  Entregador.remove({ _id: req.params.id }, function(err){
    if(err) {
      res.status(500).json({ message: err });
    } else {
      res.status(204).json();
    }
  })
})

module.exports = router;
