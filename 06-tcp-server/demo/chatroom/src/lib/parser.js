'use strict';

exports.parser = function(line, emitCallback) {
  if (line === '\r\n') {
    return emitCallback('@help');
  }

  // TODO: actually implement this!
  emitCallback('@all', line);
  
  // if line starts with @all, emit @all message
  // if line starts with @dm <name> message,
  //   emit @dm with [name, message]
  // if line starts with @nick <name>,
  //   emit @nick with [name]
};
