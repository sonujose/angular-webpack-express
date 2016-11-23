/*jslint nomen:true*/

'use strict';

var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
var notifier = require("node-notifier");
var gutil = require('gulp-util');

app.set('views', __dirname + '/../');

app.use(express["static"](path.join(__dirname, '../')));

app.use(bodyParser.json());

require('./routes')(app);

app.listen(9000);

gutil.log(gutil.colors.bgRed("Server listening on port 9000"), gutil.colors.bgBlue("go to http://localhost:9000"));

notifier.notify({title: "Server listening on port 9000", message: "http://localhost:9000", wait: false});