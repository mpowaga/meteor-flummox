FlummoxMeteor._runReactRouterImpl = function (routes, Flux) {
  ReactRouter.run(routes, ReactRouter.HistoryLocation, function (Handler) {
    var flux = new Flux();
    flux.deserialize(FLUMMOX_SERIALIZED_STATE);
    React.render(React.createFactory(Handler)({ flux: flux }),
                 document.getElementById('__FlummoxMeteor_root'));
  });
};
