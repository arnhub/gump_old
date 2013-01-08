'use strict';

var socketIoHost;

(function () {
  var params = location.search,
      paramsObj = {},
      hostname = location.hostname,
      port = location.port,
//      scriptTag = document.createElement('script');

  params = params.slice(1).split('&');
  for (var i = 0; i < params.length; i++) {
    var param = params[i].split('='),
        key = param[0],
        value = param[1];

    paramsObj[key] = value;
  }

  if (paramsObj.socketIoPort) {
    port = paramsObj.socketIoPort;
  }

  socketIoHost = '//' + hostname + ':' + port;

//  scriptTag.src = socketIoHost + '/socket.io/socket.io.js';
//  document.body.appendChild(scriptTag);

  document.write('<script src="' + socketIoHost + '/socket.io/socket.io.js"></script>');
})();
