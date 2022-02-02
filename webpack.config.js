const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vaga.min.js',
    library: 'vaga',
    libraryTarget: 'umd'
  },
  stats: {
    all: undefined,
    assets: false,
    modules: false,
    builtAt: false

  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({})
    ]
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              ["@babel/preset-env", {
                "useBuiltIns": "usage",
                "debug": true,
                "targets": {
                  "browsers": [
                    "> 3%",
                    "safari >= 10",
                    "ie > 11"
                  ]
                }
              }]
            ]
          }
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true,
            removeComments: true,
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true,
          }
        }
      }
    ]
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].min.css",
      chunkFilename: "[id].css"
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
    }),
    //new BundleAnalyzerPlugin(),

  ]
};

module.exports = [config];