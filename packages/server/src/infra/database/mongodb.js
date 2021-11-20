import mongoose from 'mongoose'

import { logServer } from '../log'

export default () => {
  mongoose.connect(process.env.MONGODB_URI, () => {
    logServer('Connected to MongoDB')
  })
}
