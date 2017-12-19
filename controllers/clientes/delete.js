var Cliente = require("../../models/Cliente");

module.exports = function(req, res) {
  Cliente.remove({ _id: req.params.id }, function(err){
    if(err) {
      res.status(500).json({ message: err });
    } else {
      res.status(204).json();
    }
  });
};
