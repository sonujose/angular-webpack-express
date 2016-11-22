'use strict';

HomeController.$inject = ['$scope', 'dataService'];

function HomeController($scope, dataService) {
    $scope.currentState = "about-controller";
    $scope.text = 'Lorem ipsum';
    $scope.optionsList = [
        {
            type: 'check',
            content: 'Check this item to enable this feature'
        },
        {
            type: 'check',
            content: 'Check to specify a custom URl'
        },
        {
            type: 'numeric',
            value: '3000',
            content: 'Server flags'
        },
        {
            type: 'numeric',
            content: 'category flags'
        },
        {
            type: 'textbox',
            content: 'Name'
        },
        {
            type: 'textbox',
            content: 'Path'
        },
        {
            type: 'dropdown',
            availableOptions: [
                { id: 1, value: 'Disable offline mode' },
                { id: 1, value: 'Disable online mode' },
                { id: 1, value: 'Office hours' }
            ],
            model: null
        },
        {
            type: 'text',
            content: 'Registry keys used to track document reviews will be reused when necessary'
        },
    ];
}

module.exports = HomeController;