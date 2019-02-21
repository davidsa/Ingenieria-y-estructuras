import mongoose from 'mongoose'

export const connection = mongoose
  .connect('mongodb://mongo/iye', {
    useNewUrlParser: true
  })
  .catch(err => console.error(err))
