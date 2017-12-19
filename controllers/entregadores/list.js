var Entregador = require("../../models/Entregador");

module.exports = function(req, res){
  Entregador.find(function(err, entregadores){
    if(err) {
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({ entregadores: entregadores });
    }
  })
};
