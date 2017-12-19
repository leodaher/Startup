var express = require("express"),
    produtos = require("../controllers/produtos"),
    router = express.Router();

router.get("/", produtos.list);
router.post("/", produtos.create);
router.get("/:id", produtos.show);
router.put("/:id", produtos.update);
router.delete("/:id", produtos.delete);
router.post("/login", produtos.login);

module.exports = router;
