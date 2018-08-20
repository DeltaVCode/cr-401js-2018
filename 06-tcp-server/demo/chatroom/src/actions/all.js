'use strict';

const events = require('../lib/events');

events.on('@all', (user, message) => {
  user.socket.write(
    `<${user.nickname}>: ${message}`
  );
});
