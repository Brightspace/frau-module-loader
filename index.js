var requirejs = require('requirejs');

module.exports = function(config, cb) {
    requirejs.config(config);
    requirejs(Object.keys(config.paths), cb);
};
