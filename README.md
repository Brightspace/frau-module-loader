# frau-module-loader
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]

frau-module-loader is a utility to allow free-range app developers to define their external [`browserify`](http://browserify.org/) dependencies without having to set up [`browserify-shim`](https://github.com/thlorenz/browserify-shim).

## Usage
```javascript
var loader = require('frau-module-loader');

module.exports = function(parent, options) {
	var config = {
		paths: {
			'superagent': 'https://s.brightspace.com/lib/superagent/1.2.0/superagent.min'
		}
	};

	loader(['superagent'], config, function() {
		// Your app code here...
	});
};
```

`loader` takes three parameters:
* `deps`: The list of dependencies for your app
* `config`: The [requirejs config](http://requirejs.org/docs/api.html) that specifies shims, paths, etc. for dependencies
* `callback`: The callback to start your app once requirejs has finished setup

The library also exposes the [global define function](http://requirejs.org/docs/api.html#define) so it can be used to define your own modules:
```javascript
var loader = require('frau-module-loader');

loader.define('react-router-shim', ['react'], function(React) {
	window.React = React;
});
```

## Contributing

Contributions are welcome, please submit a pull request!

### Code Style

This repository is configured with EditorConfig rules and contributions should make use of them.

[npm-url]: https://www.npmjs.com/package/frau-module-loader
[npm-image]: https://img.shields.io/npm/v/frau-module-loader.svg
[ci-image]: https://travis-ci.org/Brightspace/frau-module-loader.svg?branch=master
[ci-url]: https://travis-ci.org/Brightspace/frau-module-loader
