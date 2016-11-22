'use strict';

(function () {
  'use strict';

  angular.module('App.shared.header')
    .directive('appHeader', function () {

      return {
        restrict: 'E',
        templateUrl: 'client/app/shared/header/headerTemplate.html',
        replace: true
      };
    });

}());