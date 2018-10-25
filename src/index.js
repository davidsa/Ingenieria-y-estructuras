import express from 'express'
import path from 'path'
const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`> Server running on port ${port}`)
})
