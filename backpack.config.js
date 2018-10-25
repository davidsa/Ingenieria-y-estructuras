module.exports = {
  webpack: (config, options, webpack) => {
    const stylusLoader = {
      test: /\.styl$/,
      use: ['style-loader', 'css-loader', 'stylus-loader']
    }
    config.module.rules.push(stylusLoader)
    return config
  }
}
