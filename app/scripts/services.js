'use strict'

var tapiiriServices = angular.module('tapiiriServices', ['ngResource']);

tapiiriServices.factory('powerliftingService', ['$resource',
  function($resource) {
    return $resource('url', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }
]);
