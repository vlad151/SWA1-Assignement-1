const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/init.js',
    fetchAPI: './src/api/fetchAPI.js', 
    xmlhttpRequest: './src/api/xmlHttpRequest.js', 
    sendWeatherDataHttp: './src/api/sendWeatherDataHttp.js',
    sendWeatherDataAPI: './src/api/sendWeatherDataAPI.js',
  },
  mode: 'development',
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
      template: 'src/index.html',
      chunks: ['fetchAPI'],
    }),
    new HtmlWebpackPlugin({
      title: 'Wacky weather http',
      filename: 'index_http.html',
      template: 'src/pages/index_http.html',
      chunks: ['xmlhttpRequest'], 
    }),
    new HtmlWebpackPlugin({
      title: 'Send Wacky Weather Data http',
      filename: 'sendWeatherData_http.html',
      template: 'src/pages/sendWeatherData_http.html',
      chunks: ['sendWeatherDataHttp'],
    }),
    new HtmlWebpackPlugin({
      title: 'Send Wacky Weather Data fetch',
      filename: 'sendWeatherData_fetch.html',
      template: 'src/pages/sendWeatherData_fetch.html',
      chunks: ['sendWeatherDataAPI'],
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean:true  },
    
}