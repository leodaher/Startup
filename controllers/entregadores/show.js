var Entregador = require("../../models/Entregador");

module.exports = function(req, res){
  Entregador.findOne({ _id: req.params.id }, function(err, entregador){
    if(err) {
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({ entregador: entregador });
    }
  })
};
