import ExtractTextPlugin from 'extract-text-webpack-plugin'
import WriteFilePlugin from 'write-file-webpack-plugin'

const rules = [
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader'
    })
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['env', { targets: { browsers: ['last 2 Chrome versions'] } }],
          'react'
        ],
        plugins: [
          ['import', { libraryName: 'antd', style: 'css' }]
        ]
      }
    }
  }
]

const config = {
  target: 'web',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js'
  },
  module: { rules },
  plugins: [
    new ExtractTextPlugin('[name].bundle.css'),
    new WriteFilePlugin()
  ],
  devServer: {
    contentBase: __dirname
  }
}

export default [config]
