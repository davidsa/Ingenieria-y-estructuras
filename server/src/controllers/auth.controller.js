import jwt from 'jsonwebtoken'
import { User } from '../model'

const SECRET = 'Mi mama me mima'

export class AuthController {
  async login(req, res, next) {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    const isMatch = await user.comparePassword(password)
    if (!isMatch) throw new Error('Wrong username or password')
    const token = await jwt.sign({ username }, SECRET)
    res.send({ token })
  }

  async register(username, password) {
    const user = new User({ username, password })
    await user.save()
    console.log(`> User ${username} created`)
  }
}
