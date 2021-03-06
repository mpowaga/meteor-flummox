FlummoxMeteor._runReactRouterImpl = function (routes, Flux) {
  WebApp.connectHandlers.use(function (req, res, next) {
    ReactRouter.run(routes, req.url, function (Root, state) {
      if (isNotFound(state.routes)) {
        res.statusCode = 404;
        return res.end('Not found');
      }

      var Handler = React.createFactory(Root);
      var flux = new Flux();
      var markup = React.renderToString(Handler({ flux: flux }));

      res.end(getBoilerplate(req, markup, flux.serialize()));
    });
  });
};

getBoilerplate = function (req, markup, serializedState) {
  var boilerplate = WebAppInternals.getBoilerplate(req, 'web.browser');
  var intro = boilerplate.substr(0, boilerplate.indexOf('<body>'));
  var script = '<script type="text/javascript">' +
    '\n  FLUMMOX_SERIALIZED_STATE = \'' + serializedState.split('\\').join('\\\\') + '\';' +
    '\n</script>';
  var outro = '<body><div id="__FlummoxMeteor_root">' + markup + '</div></body></html>';

  return intro + script + outro;
};

isNotFound = function (routes) {
  return _.some(routes, function (route) {
    return route.isNotFound;
  });
};
