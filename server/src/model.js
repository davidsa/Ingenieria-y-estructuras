import mongoose from 'mongoose'

const Schema = mongoose.Schema(
  { filename: String, _id: mongoose.Types.ObjectId },
  { strict: false }
)

export const ImageFile = mongoose.model('ImageFile', Schema, 'images.files')
export const ImageChunk = mongoose.model('ImageChunk', Schema, 'images.chunks')
