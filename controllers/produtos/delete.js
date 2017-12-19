var Produto = require("../../models/Produto");

module.exports = function(req, res) {
  Produto.remove({ _id: req.params.id }, function(err) {
    if(err) {
      res.status(500).json({ message: err });
    } else {
      res.status(204).json({ message: "Produto excluído com sucesso." });
    }
  })
};
