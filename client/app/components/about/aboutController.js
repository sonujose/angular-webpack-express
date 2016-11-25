'use strict';

AboutController.$inject = ['$scope', 'dataService'];

function AboutController($scope, dataService) {
    $scope.currentState = "about-controller";
    dataService.getDetails().then((res) => {
            $scope.text = res.data;
        }, (error) => {
            $scope.error = error;
        });
}
module.exports = AboutController;
