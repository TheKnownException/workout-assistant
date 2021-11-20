import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
jest.setTimeout(30000)

beforeAll(async () => {
  mongoose
    .connect(process.env.MONGODB_URI_TESTS)
    .then(x => {
      console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
      )
    })
    .catch(err => {
      console.error('Error connecting to mongo', err)
    })
})

afterAll(async () => {
  await mongoose.disconnect()
  await mongoose.connection.close()
})
