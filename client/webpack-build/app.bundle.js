/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	module.exports = __webpack_require__(8);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var aboutController = __webpack_require__(2);
	var homeController = __webpack_require__(3);
	
	angular.module('App.components', [])
	    .controller('HomeController', homeController)
	    .controller('AboutController', aboutController)
	    .name;


/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ },
/* 3 */
/***/ function(module, exports) {

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

/***/ },
/* 4 */
/***/ function(module, exports) {

	angular.module('App.shared', [
	  'App.shared.header'
	]);
	
	angular.module('App.shared.header', []);

/***/ },
/* 5 */
/***/ function(module, exports) {

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

/***/ },
/* 6 */
/***/ function(module, exports) {

	(function () {
	  'use strict';
	  
	  angular.module('App', [
	    'App.components',
	    'App.shared',
	    'ui.router'
	  ]);
	
	}());

/***/ },
/* 7 */
/***/ function(module, exports) {

	(function () {
	  'use strict';
	
	  angular.module('App')
	    .config(function ($stateProvider, $urlRouterProvider) {
	      
	      $urlRouterProvider.otherwise('/home');
	      
	      $stateProvider
	        .state('home', {
	          templateUrl: 'client/app/components/home/home.html',
	          controller: 'HomeController',
	          url: '/home'
	        })
	        .state('about', {
	          templateUrl: 'client/app/components/about/about.html',
	          controller: 'AboutController',
	          url: '/about'
	        });
	    });
	
	}());

/***/ },
/* 8 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map