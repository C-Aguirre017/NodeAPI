var mongoose = require('mongoose');
var uri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL ||'mongodb://localhost/Evaluame';
var theport = process.env.PORT || 5000;

global.db = mongoose.connect(uri, function (err, res) {
     if (err) {
       console.log ('ERROR connecting to: ' + uristring + '. ' + err);
     } else {
       console.log ('Succeeded connected to: ' + uristring);
     }
   });