var Cliente = require("../../models/Cliente");

module.exports = function(req, res) {
  Cliente.findOne({ _id: req.params.id }, function(err, cliente){
    if(err) {
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({ cliente: cliente });
    }
  })
};
