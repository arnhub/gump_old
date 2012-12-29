'use strict';

gumpApp.directive('dashboardPlayer', function() {
  return {
    templateUrl: './partials/dashboard-player.html',
    scope: {
      player: '=',
      number: '='
    }
//    link: function postLink(scope, element, attrs) {
//      console.log(scope, element, attrs);
////      element.text('this is the dashboardPlayer directive');
//    }
  };
});
