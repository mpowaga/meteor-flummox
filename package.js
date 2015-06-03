Package.describe({
  name: 'mpowaga:flummox',
  description: 'Wrapper package for flummox library',
  version: '3.5.2'
});

Package.onUse(function (api) {
  Npm.depends({
    flummox: '3.5.2'
  });


});
