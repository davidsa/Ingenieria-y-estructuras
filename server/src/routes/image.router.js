import { Router } from 'express'
import { ImgController } from '../controllers'
import { upload } from '../upload'

export const router = new Router()

const controller = new ImgController()

router.get('/', controller.getImages)
router.get('/:id', controller.getImage)
router.post('/', upload.single('image'), controller.uploadImage)
