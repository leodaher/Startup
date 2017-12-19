var express = require("express"),
    clientes = require("../controllers/clientes"),
    router = express.Router();

router.get("/", clientes.list);
router.post("/", clientes.create);
router.get("/:id", clientes.show);
router.put("/:id", clientes.update);
router.delete("/:id", clientes.delete);
router.post("/login", clientes.login);

module.exports = router;
