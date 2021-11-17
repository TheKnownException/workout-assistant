import express from 'express'
import dotenv from 'dotenv'

import mongodb from './infra/database/mongodb'
import middlewares from './infra/middlewares'

dotenv.config()

const app = express()
middlewares(app)

app.listen(process.env.SERVER_PORT, () => {
  mongodb()
  console.log(`Server running at port ${process.env.SERVER_PORT}`)
})
