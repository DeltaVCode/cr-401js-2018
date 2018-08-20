'use strict';

const events = require('../lib/events');
const socketPool = require('../lib/socket-pool');

events.on('@all', (user, message) => {
  socketPool.forEach(eachUser => {
    eachUser.socket.write(
      `<${user.nickname}>: ${message}`
    );
  });
});
