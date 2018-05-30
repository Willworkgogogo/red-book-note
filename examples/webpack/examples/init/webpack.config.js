const path = require('path')

module.exports = {
  entry: {
    index1: ['./index.js', './index2.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  }
}