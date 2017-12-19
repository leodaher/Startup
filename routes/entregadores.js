var express = require("express"),
    entregadores = require("../controllers/entregadores"),
    router = express.Router();

router.get("/", entregadores.list);
router.post("/", entregadores.create);
router.get("/:id", entregadores.show);
router.put("/:id", entregadores.update);
router.delete("/:id", entregadores.delete);
router.post("/login", entregadores.login);

module.exports = router;
