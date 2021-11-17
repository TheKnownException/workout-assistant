import mongoose from 'mongoose'

export default () => {
  mongoose.connect(process.env.MONGODB_URI, () => {
    console.log('Connected to MongoDB')
  })
}