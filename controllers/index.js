var express = require("express"),
    router = express.Router();

router.use("/clientes", require('./clientes'));

module.exports = router;
