'use strict';

var aboutController = require('./about/aboutController');
var homeController = require('./home/homeController');

angular.module('App.components', [])
    .controller('HomeController', homeController)
    .controller('AboutController', aboutController)
    .name;
