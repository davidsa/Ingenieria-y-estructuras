import { Router } from 'express'
import { ImgController } from './controller'
import { upload } from './upload'

export let router = new Router()

const controller = new ImgController()

router.get('/images', controller.getImages)
router.get('/images/:id', controller.getImage)
router.post('/images', upload.single('image'), controller.uploadImage)
