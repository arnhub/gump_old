'use strict';

gumpApp.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
  $http({method: 'GET', url: '/api/game'}).
      success(function (data, status, headers, config) {
        $scope.game = data;
      }).
      error(function (data, status, headers, config) {
        console.log(data, status, headers, config);
        // called asynchronously if an error occurs
        // or server returns response with status
        // code outside of the <200, 400) range
      });
}]);
