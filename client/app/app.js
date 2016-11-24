'use strict';

require('./components');
require('./shared');
require('../styles/app.scss');

var appModule = angular.module('App', ['App.components', 'App.shared', 'ui.router']);

appModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            templateUrl: 'client/app/components/home/home.html',
            controller: 'HomeController',
            url: '/home'
        })
        .state('about', {
            templateUrl: 'client/app/components/about/about.html',
            controller: 'AboutController',
            url: '/about'
        });
}]);
