const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  const config = {
    // Set mode based on NODE_ENV or CLI argument
    mode: isProduction ? 'production' : 'development',
    
    // Better source maps for development
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      clean: true, // Clean the output directory before emit
    },
    module: {
      rules: [
        { 
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true, // Improve build performance
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
      hot: true, // Enable Hot Module Replacement
      open: true, // Open browser automatically
    },
  };

  return config;
};