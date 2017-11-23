var mongoose = require("mongoose");

var produtoSchema = new mongoose.Schema({
  nome: String,
  img: String,
  categorias: [String]
});

module.exports = mongoose.model("Produto", produtoSchema);
