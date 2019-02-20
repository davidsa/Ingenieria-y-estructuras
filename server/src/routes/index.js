import { Router } from 'express'
import { router as imageRouter } from './image.router'
import { router as authRouter } from './auth.router'

export const router = Router()

router.use('/images', imageRouter)
router.use('/auth', authRouter)
