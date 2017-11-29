var mongoose = require("mongoose");

var entregadorSchema = new mongoose.Schema({
  email: String,
  password: String,
  nome: String,
  dtNasc: Date,
  cpf: String,
  fone: String,
  endereco: mongoose.Schema.Types.ObjectId,
  comprovanteResid: String,
  cnh: String,
  clrv: String,
  dtRegistro: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Entregador", entregadorSchema);
