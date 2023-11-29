const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  performance: { hints: false },
  context: path.resolve(__dirname, ''),
  entry: {
    'xtendui': ['./dist/xtendui.js', './dist/xtendui.css'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].min.js',
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
        exclude: {
          and: [/node_modules/],
          not: [/node_modules\/xtendui/],
        },
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: require('core-js/package.json').version,
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
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
    minimizer: [
      new TerserJSPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
  devtool: 'source-map',
}
