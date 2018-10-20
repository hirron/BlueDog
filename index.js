var express = require('express');
var path = require('path');
var app = express();
var port =  process.env.PORT || 3000;
var pgp = require('pg-promise')();




app.use(express.static(path.join(__dirname, 'src')));
require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;
