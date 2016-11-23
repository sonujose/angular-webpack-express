
'use strict';

var AppHeaderDirective = require('./directives/headerDirective');
var DataService = require('./services/dataService');

angular.module('App.shared', [])
    .directive('appHeader', AppHeaderDirective)
    .service('dataService', DataService)
    .name;
