require('./configuration/production');

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = 8000 ;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api',require('./routes/index'));

app.listen(port, function() {
  console.log('Listening on port ' + port);
})
