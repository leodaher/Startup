var Entregador = require("../../models/Entregador");

module.exports = function(req, res){
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
};
