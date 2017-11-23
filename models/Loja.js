var mongoose = require("mongoose");

var lojaSchema = new mongoose.Schema({
  email: String,
  nomePF: String,
  nomePJ: String,
  enderecos: [mongoose.Schema.Types.ObjectId],
  fone: String,
  catalogo: [{
    produto: mongoose.Schema.Types.ObjectId,
    preco: String
  }],
  dtRegistro: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Loja", lojaSchema);
