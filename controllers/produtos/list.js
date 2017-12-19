var Produto = require("../../models/Produto");

module.exports = function(req, res){
  Produto.find(function(err, produtos){
    if(err) {
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({ produtos: produtos });
    }
  });
};
