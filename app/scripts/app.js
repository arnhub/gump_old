'use strict';

var gumpApp = angular.module('gumpApp', [])
    .config(['$routeProvider', function ($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller : 'MainCtrl'
      })
      .when('/player/:id', {
        templateUrl: 'views/player.html',
        controller: 'PlayerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
