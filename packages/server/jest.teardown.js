import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

async function teardown() {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI_TESTS)
    console.log(
      `Connected to Mongo! Database name: "${connection.connections[0].name}"`
    )
    console.log('Droping database...')
    await mongoose.connection.dropDatabase()
    await mongoose.disconnect()
    await mongoose.connection.close()
    console.log('Ended connection to Database')
  } catch (error) {
    console.error(error)
  }
}

teardown()
