const requireDirectory = require('require-directory');
// Export everything in actions
// with require('./actions')
module.exports = requireDirectory(module);
