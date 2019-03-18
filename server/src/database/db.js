import mongoose from 'mongoose'

export const connect = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true
})

export const connection = mongoose.connection

connection.on('error', err => console.error('Database error: ', err))
