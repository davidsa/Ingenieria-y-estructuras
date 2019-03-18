import GridFSStorage from 'multer-gridfs-storage'
import { connect } from './db'

export const storage = new GridFSStorage({
  db: connect,
  file: (req, file) => ({ bucketName: 'images', filename: file.originalname })
})
