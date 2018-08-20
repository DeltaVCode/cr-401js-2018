'use strict';

const EventEmitter = require('events');

class LoggingEventEmitter extends EventEmitter {
  emit(event, ...args) {
      console.log('emit:', event, args);
      super.emit(event, ...args);
  }
}

module.exports = new LoggingEventEmitter();

// This is stupid, don't actually do it
module.exports.events2 = new LoggingEventEmitter();
