'use strict';

var gumpApp = angular.module('gumpApp', [])
    .config(['$routeProvider', function ($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller : 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
