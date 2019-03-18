import express from 'express'
import path from 'path'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import { connection } from './database'
import { router } from './routes'
import { errorHandler } from './middlewares'

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'))
app.use('/api', router)
app.use(errorHandler)

const port = process.env.PORT || 3000

connection.once('open', () => {
  console.log('database connected')
  app.listen(port, () => {
    console.log(`> Server running on port ${port}`)
  })
})

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
  // application specific logging, throwing an error, or other logic here
})
