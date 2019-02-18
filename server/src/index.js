import express from 'express'
import path from 'path'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { connection } from './database'
import { router } from './routes'

const app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'))

app.use('/api', router)

const port = process.env.PORT || 3000

connection.then(() => {
  console.log('database connected')
  app.listen(port, () => {
    console.log(`> Server running on port ${port}`)
  })
})
