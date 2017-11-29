var express = require("express"),
    router = express.Router();

router.use("/clientes", require('./clientes'));
router.use("/entregadores", require('./entregadores'));

module.exports = router;
