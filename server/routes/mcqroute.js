// create an mcq route that will recieve the question and 4 options and answer and save it to the database

// Path: server/routes/mcqroute.js
const express = require("express");
const router = express.Router();
var mcq = require("../models/mcqmodel");

// GET all mcq items
router.get("/", function (req, res) {
  mcq
    .find({})
    .exec() // Use exec() instead of passing a callback
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// POST a new mcq item

router.post("/", function (req, res) {
  var newMcq = new mcq(req.body);

  newMcq
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// DELETE a mcq item
router.delete("/:id", function (req, res) {
  mcq
    .findOneAndDelete({ _id: req.params.id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// PUT (update) a mcq item
router.put("/:id", function (req, res) {
  mcq
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
// Check if an MCQ answer is correct
router.post("/check-answer", function (req, res) {
  const mcqId = req.body.mcqId; // Assuming you have a unique identifier for each MCQ item
  const submittedAnswer = req.body.submittedAnswer;

  mcq.findById(mcqId)
    .then((mcqItem) => {
      if (mcqItem.answer === submittedAnswer) {
        res.send({ correct: true });
      } else {
        res.send({ correct: false });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;