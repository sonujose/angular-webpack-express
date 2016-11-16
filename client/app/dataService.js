(function () {
  'use strict';

  angular.module('App')
    .service('dataService', function ($http) {
      
      var getDetails = function() {
        var reqconfig = {
          method: "GET",
          url: "api/test"
        }
        return $http(reqconfig);
      }
      
      return {
        getDetails: getDetails
      };

    });

}());