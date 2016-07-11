var Schema =   db.Schema;

// User Schema
var userSchema = new Schema({
  name: {
    first: {
      type: String,
      lowercase: true
    },
    last: {
      type: String,
      lowercase: true
    }
  },
  gender: {
    type: String,
    enum: ['Hombre', 'Mujer']
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
      sparse: true
    }
  },
  created_at: Date,
  updated_at: Date
});

userSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

module.exports = db.model('User', userSchema);
