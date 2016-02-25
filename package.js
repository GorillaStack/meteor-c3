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

Package.onUse(function (api) {
  if (api.versionsFrom) {
    api.versionsFrom('METEOR@0.9.0');
  }

  api.use('sergeyt:d3@3.4.1', 'client');
  api.use('templating');

  api.addFiles([
    'c3/c3.js',
    'c3/c3.css',
    'template.html',
    'template.js'
  ], 'client');
});
