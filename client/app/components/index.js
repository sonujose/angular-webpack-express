'use strict';

var aboutController = require('./about/aboutController');
var homeController = require('./home/homeController');

require('./home/home.scss');
require('./about/about.scss');

angular.module('App.components', [])
    .controller('HomeController', homeController)
    .controller('AboutController', aboutController)
    .name;
