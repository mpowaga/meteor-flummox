Package.describe({
  name: 'mpowaga:flummox',
  description: 'Wrapper package for flummox library',
  version: '3.5.2'
});

Package.onUse(function (api) {
  api.use('reactjs:react');

  api.addFiles('flummox.bundle.js');

  api.addFiles('addons/router.js');
  api.addFiles('addons/router-client.js', 'client');
  api.addFiles('addons/router-server.js', 'server');

  api.export('Flummox');
  api.export('FluxComponent');
  api.export('FlummoxMeteor');
});
