(function () {
  'use strict';

  angular.module('App')
    .config(function ($stateProvider, $urlRouterProvider) {
      
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
    });

}());