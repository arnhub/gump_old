'use strict';

gumpApp.controller('MainCtrl', ['$scope', function ($scope) {
    var dashboard = io.connect(socketIoHost + '/dashboard');

    dashboard.on('game-updated', function (game) {
        $scope.$apply(function () {
          $scope.game = game;
        });
    });
}]);
