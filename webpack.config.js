const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
require('./build/less.js')
require('./build/js.js')

module.exports = {
  mode: 'production',
  performance: { hints: false },
  context: path.resolve(__dirname, ''),
  entry: {
    'dist/xtend': ['./dist/xtend.js', './dist/xtend.less']
  },
  output: {
    filename: '[name].min.js',
    path: __dirname
  },
  resolve: {
    alias: {
      'xtend-library': path.resolve(__dirname, './') // resolve xtend-library js and css
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env',
                {
                  useBuiltIns: 'entry',
                  corejs: 2
                }
              ]
            ],
            plugins: [
              ['@babel/plugin-transform-for-of'],
              ['@babel/plugin-transform-arrow-functions'],
              ['@babel/plugin-proposal-object-rest-spread']
            ]
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css'
    })
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({
      sourceMap: true
    }), new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: {
        map: {
          inline: false,
          annotation: true
        }
      }
    })]
  },
  devtool: 'source-map'
}
