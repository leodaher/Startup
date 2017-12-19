var Cliente = require("../../models/Cliente");

module.exports = function(req, res) {
  Cliente.findOne({ _id: req.params.id }, function(err, cliente){
    if(err) {
      res.status(500).json({ message: err });
    } else {
      cliente.nome = req.body.nome || cliente.nome;
      cliente.cpf = req.body.cpf || cliente.cpf;
      cliente.fone = req.body.fone || cliente.fone;
      cliente.dtNasc = req.body.dtNasc || cliente.dtNasc;

      cliente.save(function(err, updatedCliente) {
        if(err) {
          res.status(500).json({ message: err });
        } else {
          res.status(200).json({ cliente: updatedCliente });
        }
      })
    }
  })
};
