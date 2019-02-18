import { GridSetup } from './database'
import mongoose from 'mongoose'
import { ImageFile } from './model'

export class ImgController {
  async getImages(req, res, next) {
    try {
      const metadata = await ImageFile.find()
      const names = metadata.map(({ _id: id }) => id)
      res.send({ names })
    } catch (error) {
      next(error)
    }
  }

  async uploadImage(req, res, next) {
    try {
      res.send({ status: 'ok', message: 'File uploaded successfuly' })
    } catch (error) {
      next(error)
    }
  }

  async getImage(req, res, next) {
    try {
      const { id } = req.params
      const { model } = await GridSetup
      model.readById(mongoose.Types.ObjectId(id)).pipe(res)
    } catch (error) {
      next(error)
    }
  }
}
