const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  return{
    entry: './src/ts/index.ts',
    mode: env.mode,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [
              'style-loader',
              'css-loader',
              'sass-loader'
          ],
        },
      ],
    },  
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/pages/index.html'
      }),
      new ESLintPlugin(),
      new CopyWebpackPlugin({
        patterns: [
            { from: 'static' }
        ]
    })
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 3000,
    },
  }
};