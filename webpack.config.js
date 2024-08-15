const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'server')
  },
  target: 'node',
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  externals: {
    sqlite3: 'commonjs sqlite3'
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/app', to: path.resolve(__dirname, 'app') } // Копируем файлы в корневую директорию 'app'
      ]
    })
  ]
};
