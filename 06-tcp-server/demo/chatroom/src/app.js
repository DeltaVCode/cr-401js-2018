'use strict';

const User = require('./models/user');
const events = require('./lib/events');
const socketPool = require('./lib/socket-pool');
const actions = require('./actions');

const net = require('net');
const server = net.createServer();

server.on('connection', function (socket) {
  socket.write(`Hello, world!\r\n`);

  socket.line = '';

  socket.on('data', function (data) {
    console.log(data);
    socket.line += data.toString();

    // Not a newline? Wait for more data...
    if (!socket.line.endsWith('\r\n'))
      return;

    console.log(socket.line);
    socket.line = '';
  });
});

exports.startServer = (port) => {
  server.listen(port, () => {
    events.emit('start', port);
  })
};


events.on('start', (portFromStartEvent) => {
  console.log(`Listening on port ${portFromStartEvent}!`);
});

// This event emitter is separate, and does not receive start
const events2 = events.events2;
events2.on('start', (portFromStartEvent) => {
  console.log(`EVENTS2: Listening on port ${portFromStartEvent}!`);
});
