(function () {
  'use strict';

  

  angular.module('App.components.about')
    .controller('about', function ($scope, dataService) {
      
        dataService.getDetails().then(function(res) {
            $scope.text = res.data;
        }, function(error) {
            $scope.error = error;
        });
        
      });
}());