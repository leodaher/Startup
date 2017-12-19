var Entregador = require("../../models/Entregador");

module.exports = function(req, res) {
  Entregador.remove({ _id: req.params.id }, function(err){
    if(err) {
      res.status(500).json({ message: err });
    } else {
      res.status(204).json();
    }
  })
};
