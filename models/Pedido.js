var mongoose = require("mongoose");

var pedidoSchema = new mongoose.Schema({
  preco: String,
  entregador: mongoose.Schema.Types.ObjectId,
  cliente: mongoose.Schema.Types.ObjectId,
  loja: mongoose.Schema.Types.ObjectId,
  lista: [{
    produto: mongoose.Schema.Types.ObjectId,
    preco: String
  }],
  status: String,
  horario: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Pedido", pedidoSchema);
