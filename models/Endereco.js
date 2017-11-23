var mongoose = require("mongoose");

var enderecoSchema = new mongoose.Schema({
  cep: String,
  logradouro: String,
  numero: String,
  complemento: String,
  cidade: String,
  estado: String
})

module.exports = mongoose.model("Endereco", enderecoSchema);
