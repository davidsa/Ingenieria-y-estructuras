import gridfs from 'mongoose-gridfs'
import mongoose from 'mongoose'
import { connection } from './db'

export const GridSetup = new Promise(resolve => {
  connection.once('open', () => {
    const GridFs = gridfs({
      collection: 'images',
      model: 'Images',
      mongooseCollection: mongoose.connection
    })
    resolve(GridFs)
  })
})
