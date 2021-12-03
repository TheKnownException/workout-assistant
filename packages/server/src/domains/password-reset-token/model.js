import { Schema, model } from 'mongoose'

const PasswordResetToken = new Schema({
  token: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

export default model('PasswordResetToken', PasswordResetToken)
