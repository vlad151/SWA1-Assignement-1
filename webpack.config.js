const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/init.js',
  mode: 'production',
  devServer: {
    static: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Use CSS and style loaders
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Wacky weather',
      template: 'src/index.html'
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true  },
    
}