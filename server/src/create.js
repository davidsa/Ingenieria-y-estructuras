require('@babel/register')
const yargs = require('yargs')
const AuthController = require('./controllers').AuthController
const controller = new AuthController()
const {
  argv: { username, password }
} = yargs
;(async () => {
  try {
    await controller.register(username, password)
  } catch (error) {
    console.error(error)
  }
})()
