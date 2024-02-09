//write a mcq model that will have a question and 4 options and a answer 
// user will only select one of the option

var mongoose = require('mongoose');
var mcqSchema = new mongoose.Schema({
    question: {
        type: String,
        required: 'Question cannot be blank!'
    },
    option1: {
        type: String,
        required: 'Option1 cannot be blank!'
    },
    option2: {
        type: String,
        required: 'Option2 cannot be blank!'
    },
    option3: {
        type: String,
        required: 'Option3 cannot be blank!'
    },
    option4: {
        type: String,
        required: 'Option4 cannot be blank!'
    },
    answer: {
        type: String,
        required: 'Answer cannot be blank!'
    },
    created_date: {
        type: Date,
        "default": Date.now
    }
    });
module.exports = mongoose.model('Mcq', mcqSchema);
