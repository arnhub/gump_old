'use strict';

gumpApp.filter('gravatar', function () {
  return function (email) {
    return 'http://www.gravatar.com/avatar/' + md5(email) + '?s=200';
  };
});
