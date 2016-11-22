'use strict';

AboutController.$inject = ['$scope', 'dataService'];

function AboutController($scope, dataService) {
    $scope.currentState = "about-controller";
    dataService.getDetails().then(function(res) {
            $scope.text = res.data;
        }, function(error) {
            $scope.error = error;
        });
}
module.exports = AboutController;
