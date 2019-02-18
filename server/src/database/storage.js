import GridFSStorage from 'multer-gridfs-storage'
import { connection } from './db'

export const storage = new GridFSStorage({
  db: connection,
  file: (req, file) => ({ bucketName: 'images', filename: file.originalname })
})
