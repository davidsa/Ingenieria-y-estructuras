require('@babel/register')({
  presets: [['@babel/preset-env', { useBuiltIns: 'usage' }]],
})
const yargs = require('yargs')
const AuthController = require('./controllers').AuthController
const {
  argv: { username, password },
} = yargs
;(async () => {
  try {
    await new AuthController().register(username, password)
  } catch (error) {
    console.error(error)
  }
})()
