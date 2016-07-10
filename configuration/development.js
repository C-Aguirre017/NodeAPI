var mongoose = require("mongoose");
var uri = 'mongodb://localhost:27017/prueba2';

global.db = mongoose.connect(uri);
