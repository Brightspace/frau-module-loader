# frau-module-loader

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

## Contributing

Contributions are welcome, please submit a pull request!
