var Cliente = require("../../models/Cliente");

module.exports = function(req, res){
  Cliente.find(function(err, clientes) {
    if(err) {
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({ clientes: clientes });
    }
  })
};
