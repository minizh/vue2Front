const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    proxy: 'http://localhost:3000'
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        'assets': resolve('src/assets'),
        'components': resolve('src/components'),
        'base': resolve('baseConfig'),
        'public': resolve('public')
      }
    }
  }
  // }
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', resolve('./src'))
  //     .set('components', resolve('./src/components'))
  //     .set('assets', resolve('./src/assets'))
  //     .set('common', resolve('./src/common'))
  //     .set('network', resolve('./src/network'))
  //     .set('views', resolve('./src/views'))
  // }
}
