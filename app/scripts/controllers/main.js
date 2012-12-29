'use strict';

gumpApp.controller('MainCtrl', function ($scope) {
  var player1 = {
    firstName: 'Hubert',
    lastName: 'SABLONNIERE',
    email: 'hubert.sablonniere@gmail.com',
    score: 7
  };
  var player2 = {
    firstName: 'Arnaud',
    lastName: 'SPANNEUT',
    email: 'arnaud.spanneut@gmail.com',
    score: 11
  };

  $scope.player1 = player1;
  $scope.player2 = player2;
});
