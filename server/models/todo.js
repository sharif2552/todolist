//todo model
var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Title cannot be blank!'
    },
    created_date: {
        type: Date,
        "default": Date.now
    }
    });
module.exports = mongoose.model('Todo', todoSchema);
// Path: server/routes/todo.js
