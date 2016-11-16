(function () {
  'use strict';

  angular.module('App.shared.header')
    .directive('appHeader', function (Config) {

      function link(scope) {
        scope.navLinks = [
          {title: 'Home', href: '/'},
          {title: 'Help', href: '/about'}
        ];
      }

      return {
        templateUrl: Config.rootPath + 'shared/header/header-view.html',
        link: link,
        replace: true
      };
    });

}());