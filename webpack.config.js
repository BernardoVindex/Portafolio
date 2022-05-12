const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  resolve: {
    extensions: ['.js','.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env'
              ],
              [
                '@babel/preset-react', { runtime: 'automatic'}
              ]
            ]
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './assets/images/[name].[ext]'            },
          },
        ],
      },
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/images', //path.resolve(__dirname, "src", "assets/images")
          to: 'assets/images'
        }
      ],
    }),
  ],
  devServer: {
    historyApiFallback: true
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ],
}
