import { Router } from 'express'
import { ImgController } from '../controllers'
import { upload } from '../upload'
import { authenticated } from '../middlewares'
export const router = new Router()

const controller = new ImgController()

router.get('/', controller.getImages)
router.get('/:id', controller.getImage)
router.post('/', authenticated, upload.single('image'), controller.uploadImage)
router.delete('/:id', authenticated, controller.deleteImage)
