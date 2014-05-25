'use strict';

var tapiiriControllers = angular.module('tapiiriControllers', []);

tapiiriControllers.controller('MainCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});

tapiiriControllers.controller('HeaderCtrl', function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
});

tapiiriControllers.controller('E-sportsCtrl', function ($scope) {

});

tapiiriControllers.controller('PowerliftingCtrl', function ($scope) {

});

tapiiriControllers.controller('SoftwareCtrl', function ($scope) {

});

tapiiriControllers.controller('BroadcastingCtrl', function ($scope) {

});

tapiiriControllers.controller('EventsCtrl', function ($scope) {

});
