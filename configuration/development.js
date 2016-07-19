var mongoose = require('mongoose');
var uri = 'mongodb://localhost:27017/prueba';

global.db = mongoose.connect(uri);
