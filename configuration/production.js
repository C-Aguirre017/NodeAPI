var mongoose = require('mongoose');
var uri = process.env.MONGOLAB_URI || process.env.MONGODB_URI || process.env.MONGOHQ_URL;

global.db = mongoose.connect(uri, function (err, res) {
     if (err) {
       console.log ('[!] ERROR connecting to: ' + uri + '. ' + err);
     } else {
       console.log ('[*] Succeeded connected to: ' + uri);
     }
   });
