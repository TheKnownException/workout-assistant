import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  name: { type: String, required: true },
  role: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  bodyInfo: {
    height: { type: Number, default: 0 },
    weightHistory: [
      {
        weight: { type: Number, default: 0 },
        date: { type: Date, default: Date.now }
      }
    ]
  }
})

export default model('User', UserSchema)
