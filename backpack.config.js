const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  webpack: (config, options, webpack) => {
    if (options.env === 'production') {
      config.plugins.push(
        new CopyWebpackPlugin([
          { from: 'src/views/', to: 'src/views/' },
          { from: 'src/styles/', to: 'src/styles/' },
          { from: 'src/public/', to: 'src/public/' },
        ])
      )
    }
    return config
  }
}
