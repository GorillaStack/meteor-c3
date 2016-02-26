Package.describe({
  name: 'gorillastack:c3',
  summary: 'A truly reactive C3 charting library based on D3',
  version: '0.4.11',
  git: 'https://github.com/gorillastack/meteor-c3.git'
});

// Before Meteor 0.9?
if (!Package.onUse) {
  Package.onUse = Package.on_use;
}

Package.onUse(function(api) {
  if (api.versionsFrom) {
    api.versionsFrom('METEOR@0.9.0');
  }

  api.use([
    'sergeyt:d3@3.4.1',
    'templating',
    'underscore',
    'ecmascript'
  ], 'client');

  api.addFiles([
    'c3/c3.js',
    'c3/c3.css',
    'src/template.html',
    'src/template.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use([
    'underscore',
    'ecmascript',
    'templating',
    'tinytest'
  ], 'client');

  api.addFiles([
    'src/template.html',
    'src/template.js',
    'test/template_tests.js'
  ], 'client');
});
