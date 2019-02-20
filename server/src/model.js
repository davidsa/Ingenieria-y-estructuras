import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const SALT = 10

const Schema = mongoose.Schema(
  { filename: String, _id: mongoose.Types.ObjectId },
  { strict: false }
)

const UserSchema = mongoose.Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true }
})

UserSchema.pre('save', function(next) {
  const user = this
  if (!user.isModified('password')) return next()
  bcrypt.hash(user.password, SALT, (err, hash) => {
    if (err) return next(err)
    user.password = hash
    next()
  })
})

UserSchema.methods.comparePassword = function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password)
}

export const User = mongoose.model('User', UserSchema)

export const ImageFile = mongoose.model('ImageFile', Schema, 'images.files')
export const ImageChunk = mongoose.model('ImageChunk', Schema, 'images.chunks')
