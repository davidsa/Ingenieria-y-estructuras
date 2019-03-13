import jwt from 'jsonwebtoken'
import { User } from '../model'

const WRONG_USER = 'Wrong username or password'
const LOGIN_SUCCESSFUL = ' Login successful'

export class AuthController {
  static async login(req, res, next) {
    try {
      const { username, password } = req.body
      const user = await User.findOne({ username })
      if (!user) {
        return res.status(401).send({ message: WRONG_USER })
      }
      const isMatch = await user.comparePassword(password)
      if (!isMatch) {
        return res.status(401).send({ message: WRONG_USER })
      }
      const token = await AuthController._getToken({ username })
      res.cookie('token', token, { httpOnly: true })
      res.send({ status: 'ok', message: LOGIN_SUCCESSFUL })
    } catch (error) {
      next(error)
    }
  }

  static _getToken(payload) {
    return jwt.sign(payload, process.env.SECRET, { expiresIn: '7 days' })
  }

  static me(req, res, next) {
    const { username } = req.locals
    try {
      res.send({ status: 'ok', username })
    } catch (error) {
      next(error)
    }
  }

  static async register(username, password) {
    const user = new User({ username, password })
    await user.save()
    console.log(`> User ${username} created`)
  }
}
