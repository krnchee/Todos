const path = require('path')

module.exports = {
  context: __dirname,
  entry: "./frontend/todo_redux.jsx",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", "*" ]
  },
  devtool: 'source-map',
};
