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
  }
});

module.exports = db.model('User', userSchema);
