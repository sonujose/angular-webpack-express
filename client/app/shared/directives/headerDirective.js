'use strict';

function appHeaderDirective() {
    return {
        restrict: 'E',
        templateUrl: 'client/app/shared/templates/headerTemplate.html',
        replace: true
      };
}

module.exports = appHeaderDirective;