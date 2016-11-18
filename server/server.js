/*jslint nomen:true*/

'use strict';

var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();

app.set('views', __dirname + '/../');

app.use(express["static"](path.join(__dirname, '../')));

app.use(bodyParser.json());

require('./routes')(app);

app.listen(8080);

//console.log("Server listening on port 9000, go to http://localhost:9000 ");