const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer")
const path = require("path")
const nodeExternals = require("webpack-node-externals");

// const isDev = process.env.NODE_ENV;

// https://github.com/css-modules/webpack-demo/issues/23

const extractPlugin = new ExtractTextPlugin({
      // filename: "dist/css/[name].css"
      filename: "dist/css/main.css",
      disable: false,
      allChunks: true
    })

const clientConfig = {
  entry: ["./src/client/index.js"],
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
    {
      test: /js$/,
      exclude: [/node_modules/, path.resolve(__dirname, 'src/server/node_modules')],
      loader: "babel-loader",
      query: { presets: ["react-app"] }
    },
    {
        test: /\.(css|styl)$/,
        use: extractPlugin.extract({
          use: [
            {
              loader: 'css-loader', 
              options: {importLoaders: 1, sourceMap: true}
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [require('autoprefixer')]
              }
            },
            {
              loader: 'stylus-loader',
              options: { sourceMap: true },
            },
          ]
        })
    },
    {
      test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.ico$/],
      loader: "file-loader",
      options: {
        name: "dist/media/[name].[ext]",
        publicPath: url => url.replace(/dist/, "")
      }
    },
    ]
  },
  plugins: [
    extractPlugin
  ]
};

const serverConfg = {
  entry: "./src/server/index.js",
  target: "node",
  externals : [nodeExternals(), path.resolve(__dirname, 'src/server/node_modules')], // avoid bundling node source files
  output : {
    path : __dirname,
    filename: "server.js",
    libraryTarget: "commonjs2"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
    {
      test: /js$/,
      exclude: [/node_modules/, path.resolve(__dirname, 'src/server/node_modules')],
      loader: "babel-loader",
      query: { presets: ["react-app"] }
    },
    {
        test: /\.(css|styl)$/,
        use: extractPlugin.extract({
          use: [
            {
              loader: 'css-loader', 
              options: {importLoaders: 1, sourceMap: true}
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [require('autoprefixer')]
              }
            },
            {
              loader: 'stylus-loader',
              options: { sourceMap: true },
            },
          ]
        })
    },
    {
      test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: "file-loader",
      options: {
        name: "dist/media/[name].[ext]",
        publicPath: url => url.replace(/dist/, ""),
        emit: false,
      }
    }
    ]
  },
  plugins: [
    extractPlugin
  ]
}

module.exports = [clientConfig,serverConfg]