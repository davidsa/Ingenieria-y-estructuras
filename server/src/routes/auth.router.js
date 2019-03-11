import { Router } from 'express'
import { AuthController } from '../controllers'
import { authenticated } from '../middlewares'
export const router = Router()

router.post('/', (req, res, next) => AuthController.login(req, res, next))
router.get('/me', authenticated, (req, res, next) =>
  AuthController.me(req, res, next)
)
