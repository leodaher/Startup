var mongoose = require("mongoose"),
    bcrypt = require("bcrypt");

var clienteSchema = new mongoose.Schema({
  email: String,
  password: String,
  facebook: {
    id: String,
    token: String,
  },
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

// Methods

// Generates a hash using the plain text password
clienteSchema.methods.generateHash = function(password) {
   bcrypt.hash(password, 10, function(err, hash){
     if(err) {
       console.log(err);
     } else {
       return hash;
     }
   })
};

// Checks if password is valid
clienteSchema.methods.validPassword = function(password, hash) {
  bcrypt.compare(password, hash, function(err, res) {
    if(err) {
      console.log(err)
    } else {
      return res;
    }
  })
};

module.exports = mongoose.model("Cliente", clienteSchema);
