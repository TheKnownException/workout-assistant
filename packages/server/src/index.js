import express from 'express'
import dotenv from 'dotenv'

import mongodb from './infra/database/mongodb'
import middlewares from './infra/middlewares'
import { logServer } from './infra/log'

dotenv.config()

const app = express()
middlewares(app)

app.listen(process.env.PORT, () => {
  mongodb()
  logServer(`Server running at port ${process.env.PORT}`)
})
