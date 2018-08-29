const path = require('path');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const htmlPlugin = new htmlWebpackPlugin({
//   filename: 'index.html',
//   template: './src/index.html'
// });
const extractPlugin = new extractTextWebpackPlugin({
  filename: 'style.css'
});

module.exports = {
    // Entry
      entry: {
        global: ['babel-polyfill','./src/js/global.js'],
        index: './src/js/index.js',
        ingredient: './src/js/ingredient.js'
      },
    // Ouptut
      output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].bundle.js'
      },
      devServer: {
        contentBase: './dist'
      },
    // Plugins
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      extractPlugin,
      new htmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        chunks: ['index', 'global']
      }),
      new htmlWebpackPlugin({
        filename: 'ingredient.html',
        template: './src/ingredient.html',
        chunks: ['ingredient', 'global']
      })
    ],
    // Loaders
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.scss$/,
          use: extractPlugin.extract({
            use: ['css-loader', 'sass-loader']
          })
        },
        // {
        //   test: /\.html$/,
        //   exclude: path.resolve(__dirname, 'src/index.html'),
        //   use: {
        //     loader: 'file-loader',
        //     options: {
        //       name: '[name].[ext]'
        //     }
        //   }
        // },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/img',
              publicPath: '/img'
            }
          }
        }
      ]
    }
};
