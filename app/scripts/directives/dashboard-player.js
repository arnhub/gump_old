'use strict';

gumpApp.directive('dashboardPlayer', function () {
  return {
    templateUrl: './partials/dashboard-player.html',
    scope      : {
      player: '=',
      number: '='
    },
    link       : function (scope, element, attrs) {
      scope.$watch('player.key', function (key) {
        if (key != undefined) {
          $('.qrcode', element).empty().qrcode({
            render: 'div',
            height: 300,
            width: 300,
            text: 'http://10.2.17.179:3501/?socketIoPort=8080#/player/1?key=' + key
          });
        }
      });
    }
  };
});
