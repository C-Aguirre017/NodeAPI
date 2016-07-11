var mongoose = require('mongoose');
var Schema =   db.Schema;

// Form Schema
var answerSchema = new Schema({
  answer: {
    type: String,
    required: true
  }
});

module.exports = answerSchema;
