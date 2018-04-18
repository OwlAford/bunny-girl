module.exports = {
  entry: [
    '@babel/polyfill',
    '<rootDir>/src/core/entry.js'
  ],
  template: '<rootDir>/public/index.html',
  devServerPort: 3001,
  publicPath: '/halo/',
  proxyTable: {
    '/music': {
      target: 'http://yuis.qiniudn.com',
      changeOrigin: true
    }
  },
  alias: {
    '~': '<rootDir>/src',
    '@': '<rootDir>/src/views',
    '#': '<rootDir>/src/assets',
    '&': '<rootDir>/src/models',
    '^': '<rootDir>/src/components'
  },
  autoOpenBrowser: true,
  lintOnSave: true
}
