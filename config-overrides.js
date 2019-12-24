const { override, addWebpackAlias, addWebpackResolve } = require('customize-cra')
const path = require('path')

const resolve = dir => path.join(__dirname, '.', dir)

module.exports = override(
  addWebpackAlias({
    '@': resolve('src')
  }),
  addWebpackResolve({
    extensions: ['.js', '.jsx', '.json']
  })
)
