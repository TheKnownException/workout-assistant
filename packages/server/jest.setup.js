import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
jest.setTimeout(30000)

beforeAll(async () => {
  mongoose.connect(process.env.MONGODB_URI_TESTS, () => {
    console.log('Connected to Mongo')
  })
})

afterAll(async () => {
  await mongoose.disconnect()
  await mongoose.connection.close()
})
