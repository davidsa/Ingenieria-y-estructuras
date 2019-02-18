import multer from 'multer'
import { storage } from './database/'

export const upload = multer({
  storage
})
