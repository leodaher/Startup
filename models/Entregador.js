var mongoose = require("mongoose");

var entregadorSchema = mongoose.Schema({
  email: String,
  nome: String,
  dtNasc: Date,
  cpf: String,
  fone: String,
  enderecos: [mongoose.Schema.Types.ObjectId],
  comprovanteResid: String,
  cnh: String,
  clrv: String,
  dtRegistro: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Entregador", entregadorSchema);
