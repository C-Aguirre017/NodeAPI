var Schema =   db.Schema;
var mongoose = require('mongoose');
var questionSchema = require("./question");

// Form Schema
var formSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  questions: [questionSchema],
  link: String,
  alive: Boolean,
  created_at: Date,
  updated_at: Date
});

formSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;

  if (!this.created_at){
    this.alive = false;
    this.created_at = currentDate;
  }

  next();
});

module.exports = db.model('Form', formSchema);
