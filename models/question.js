var Schema =   db.Schema;
var answerSchema = require('./answer');

// Form Schema
var questionSchema = new Schema({
  num_question: {
    type: Number,
    required: true
  },
  type: String,
  question:{
    type: String,
    required: true
  },
  answers: [answerSchema]
});

module.exports = questionSchema;
