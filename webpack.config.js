// webpack.config.js

const path = require("path");

const Html = require("html-webpack-plugin");

const resolvePath = (x) => path.resolve(__dirname, ...x.split(path.sep));

module.exports = {
  entry: {
    main: resolvePath("src/app.js"),
  },

  output: {
    path: resolvePath("public"),
    uniqueName: "main",
    clean: true,
    chunkFormat: "module",
  },

  mode: "development",

  bail: true,

  target: "es2021",

  optimization: {
    minimize: false,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        defaultVendors: false,
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },

  plugins: [
    new Html({
      template: resolvePath("src/index.ejs"),
      scriptLoading: "module",
    }),
  ],
};
