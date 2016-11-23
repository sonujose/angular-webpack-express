'use strict';

DataService.$inject = ['$http'];
function DataService($http) {
    
    var getDetails = function () {
        var reqconfig = {
            method: "GET",
            url: "api/test"
        }
        return $http(reqconfig);
    }

    return {
        getDetails: getDetails
    };
}

module.exports = DataService;
