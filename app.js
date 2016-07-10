require("./configuration/development");

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = 8000 ;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(require('./controllers/index'));

app.listen(port, function() {
  console.log('Listening on port ' + port);
})
