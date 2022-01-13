const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  performance: { hints: false },
  context: path.resolve(__dirname, ''),
  entry: {
    'dist/xtendui': ['./dist/xtendui.js', './dist/xtendui.css'],
  },
  output: {
    filename: '[name].min.js',
    path: __dirname,
  },
  resolve: {
    alias: {
      // resolve xtendui import js and css
      xtendui: path.resolve(__dirname, './'),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
  ],
  optimization: {
    minimizer: [new TerserJSPlugin()],
  },
  devtool: 'source-map',
}
