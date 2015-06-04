FlummoxMeteor = {
  _reactRouterInitialized: false,

  _runReactRouterImpl: function (routes, flux) {
    // defined in separate files for each environment
    throw new Error(
      'MeteorFlummox.runReactRouter called on unsupported environment');
  },

  runReactRouter: function (routes, flux) {
    if (! Package['mpowaga:react-router']) {
      throw new Error(
        'MeteorFlummox.runReactRouter requires mpowaga:react-router to be installed');
    }

    if (this._reactRouterInitialized) {
      throw new Error(
        'MeteorFlummox.runReactRouter can be called only once');
    }

    this._runReactRouterImpl(routes, flux);
    this._reactRouterInitialized = true;
  }
};
