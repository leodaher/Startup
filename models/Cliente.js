var mongoose = require("mongoose");

var clienteSchema = new mongoose.Schema({
  email: String,
  nome: String,
  cpf: String,
  fone: String,
  dtNasc: Date,
  enderecos: [mongoose.Schema.Types.ObjectId],
  dtRegistro: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Cliente", clienteSchema);
