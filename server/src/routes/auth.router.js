import { Router } from 'express'
import { AuthController } from '../controllers'

export const router = Router()

router.post('/', (req, res, next) => AuthController.login(req, res, next))
