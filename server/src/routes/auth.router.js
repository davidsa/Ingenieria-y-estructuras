import { Router } from 'express'
import { AuthController } from '../controllers'

export const router = Router()

const controller = new AuthController()

router.post('/', controller.login)
