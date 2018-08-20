'use strict';

const events = require('../lib/events');

events.on('@help', (user) => {
  user.socket.write('Try @all <message>\r\n');
});
