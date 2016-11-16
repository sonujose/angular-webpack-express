(function () {
  'use strict';

  angular.module('App')
    .config(function ($stateProvider, $urlRouterProvider) {
      
      $urlRouterProvider.otherwise('/home');
      
      $stateProvider
        .state('home', {
          templateUrl: 'client/app/components/home/home-view.html',
          controller: 'home',
          url: '/home'
        })
        .state('about', {
          templateUrl: 'client/app/components/about/about-view.html',
          controller: 'about',
          url: '/about'
        });
    });

}());