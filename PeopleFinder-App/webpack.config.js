const path = require('path');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
module.exports = {
  context: path.resolve(__dirname, './src'),

  entry: {
    javascript: "./js/app.js",
    html: "./index.html",
  },

  output: {
    filename: "app.js",
    path: __dirname + "/static",
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    root: path.resolve(__dirname, './src/js'),
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  },
   setup(app) {
      // This lets us open files from the runtime error overlay.
      //app.use(errorOverlayMiddleware());
      // This service worker file is effectively a 'no-op' that will reset any
      // previous service worker registered for the same host:port combination.
      // We do this in development to avoid hitting the production cache if
      // it used the same host and port.
      // https://github.com/facebookincubator/create-react-app/issues/2272#issuecomment-302832432
      console.log("Hi");
      app.use(noopServiceWorkerMiddleware());
    },
}
