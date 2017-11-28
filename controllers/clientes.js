var express = require("express"),
    router = express.Router();

// Index - list all clients
router.get("/", function(req, res){
  res.send("List of all clients");
});

// Create - create a new client
router.post("/", function(req, res){
  res.send("Create new client");
});

// Show - return a specific client
router.get("/:id", function(req, res){
  res.send("Client number " + req.params.id);
})

module.exports = router;
