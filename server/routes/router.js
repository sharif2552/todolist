var express = require("express");
var router = express.Router();
var todo = require("../models/todo");

// GET all todo items
router.get("/", function (req, res) {
  todo
    .find({})
    .exec() // Use exec() instead of passing a callback
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// POST a new todo item
router.post("/", function (req, res) {
  var newTodo = new todo(req.body);

  newTodo
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// DELETE a todo item
router.delete("/:id", function (req, res) {
  todo
    .findOneAndDelete({ _id: req.params.id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// PUT (update) a todo item
// PUT (update) a todo item
router.put("/:id", function (req, res) {
  todo
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
