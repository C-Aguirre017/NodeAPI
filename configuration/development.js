var mongoose = require('mongoose');
var uri = 'mongodb://localhost:27017/prueba';

global.db = mongoose.connect(uri);

/*
mongoose.connect(uri), function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
});
*/
