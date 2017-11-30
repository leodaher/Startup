var express = require("express"),
    Produto = require("../models/Produto"),
    router = express.Router();

/*
----------- INDEX - list all products --------
*/
router.get("/", function(req, res){
  Produto.find(function(err, produtos){
    if(err) {
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({ produtos: produtos });
    }
  });
});

/*
------------ CREATE - create new product ------
*/
router.post("/", function(req, res) {
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
});

/*
------------ SHOW - return specific product ------
*/
router.get("/:id", function(req, res) {
  Produto.findOne({ _id: req.params.id }, function(err, produto) {
    if(err) {
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({ produto: produto });
    }
  })
});

/*
------------ UPDATE - update specific product ------
*/
router.put("/:id", function(req, res) {
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
});

/*
------------ DELETE - delete specific product -------
*/
router.delete("/:id", function(req, res) {
  Produto.remove({ _id: req.params.id }, function(err) {
    if(err) {
      res.status(500).json({ message: err });
    } else {
      res.status(204).json({ message: "Produto excluído com sucesso." });
    }
  })
})

module.exports = router;
