module.exports = {
  entry: './flummox.js',

  output: {
    filename: 'flummox.bundle.js'
  },

  externals: {
    'react': "Package['reactjs:react'].React",
    'react/addons': "Package['reactjs:react'].React"
  },

  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader?stage=0&loose=all'], exclude: /node_modules/ }
    ]
  }
};
