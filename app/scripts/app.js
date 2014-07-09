'use strict';

var tapiiriinApp = angular.module('tapiiriinApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'tapiiriControllers',
  'tapiiriServices'
]);

tapiiriinApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController'
    })
    .when('/e-sports', {
      templateUrl: 'views/e-sports.html',
      controller: 'E-sportsController'
    })
    .when('/powerlifting', {
      templateUrl: 'views/powerlifting.html',
      controller: 'PowerliftingController'
    })
    .when('/software', {
      templateUrl: 'views/software.html',
      controller: 'SoftwareController'
    })
    .when('/broadcasting', {
      templateUrl: 'views/broadcasting.html',
      controller: 'BroadcastingController'
    })
    .when('/events', {
      templateUrl: 'views/events.html',
      controller: 'EventsController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

var tapiiriControllers = angular.module('tapiiriControllers', []);
var tapiiriServices = angular.module('tapiiriServices', []);
