var express = require("express"),
    Cliente = require("../models/Cliente"),
    router = express.Router();

// Index - list all clients
router.get("/", function(req, res){
  Cliente.find(function(err, clientes) {
    if(err) {
      console.log(err);
    } else {
      console.log(clientes);
    }
  })
});

// Create - create a new client
router.post("/", function(req, res) {
  res.type('json');
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
    var cliente = new Cliente({
      email: email,
      facebook: {
        id: facebook_id,
        token: facebook_token
      },
      nome: nome,
      cpf: cpf,
      fone: fone,
      dtNasc: dtNasc
    });

    var password = cliente.generateHash(realpassword);

    cliente.password = password;

    cliente.save(function(err){
      if(err) {
        console.log(err);
        res.status(500).json({
          message: "Algo deu errado no servidor."
        });
      } else {
        res.status(201).json({
          message: "O cliente foi criado com sucesso."
        });
      }
    })
  }
});

// Show - return a specific client
router.get("/:id", function(req, res) {
  res.send("Client number " + req.params.id);
});

// Update - update a specific client
router.put("/:id", function(req, res) {
  res.send("Client number " + req.params.id + " updated");
});

module.exports = router;
