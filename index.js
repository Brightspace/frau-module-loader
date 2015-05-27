var requirejs = require('requirejs');

module.exports = function(deps, config, cb) {
	requirejs.config(config);
	requirejs(deps, cb);
};
