var requirejs = require('requirejs');
var define = require('define');

var moduleLoader = function (deps, config, cb) {
	requirejs.config(config);
	requirejs(deps, cb);
};

moduleLoader.define = define;

module.exports = moduleLoader;
