import express from 'express'
import cors from 'cors'
import routes from './routes'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import mongodb from './infra/mongodb'

dotenv.config()

const app = express()

app.use(cors())
app.use(routes)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(3000, () => {
  mongodb()
  console.log('Server running')
})
