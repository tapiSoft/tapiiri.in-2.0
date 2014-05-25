'use strict';

var tapiiriinApp = angular.module('tapiiriinApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'tapiiriControllers'
]);

tapiiriinApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/e-sports', {
      templateUrl: 'views/e-sports.html',
      controller: 'E-sportsCtrl'
    })
    .when('/powerlifting', {
      templateUrl: 'views/powerlifting.html',
      controller: 'PowerliftingCtrl'
    })
    .when('/software', {
      templateUrl: 'views/software.html',
      controller: 'SoftwareCtrl'
    })
    .when('/broadcasting', {
      templateUrl: 'views/broadcasting.html',
      controller: 'BroadcastingCtrl'
    })
    .when('/events', {
      templateUrl: 'views/events.html',
      controller: 'EventsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
