var Produto = require("../../models/Produto");

module.exports = function(req, res) {
  var nome = req.body.nome,
      img = req.body.img,
      categorias = req.body.categorias;

  var produto = new Produto({
    nome: nome,
    img: img,
    categorias: categorias
  });

  produto.save(function(err){
    if(err) {
      res.status(500).json({ message: err });
    } else {
      res.status(201).json({ message: "O produto foi criado com sucesso" });
    }
  });
};
