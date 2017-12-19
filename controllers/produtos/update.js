var Produto = require("../../models/Produto");

module.exports = function(req, res) {
  Produto.findOne({ _id: req.params.id }, function(err, produto) {
    if(err) {
      res.status(500).json({ message: err });
    } else {

      produto.nome = req.body.nome || produto.nome;
      produto.img = req.body.img || produto.img;
      produto.categorias = req.body.img || produto.categorias;

      produto.save(function(err, updatedProduct) {
        if(err) {
          res.status(500).json({ message: err });
        } else {
          res.status(200).json({ produto: updatedProduct });
        }
      });
    }
  });
};
