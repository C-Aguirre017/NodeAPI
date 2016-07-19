require('./configuration/production');

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api',require('./routes/index'));

app.listen(port, function() {
  console.log('Listening on port ' + port);
})
