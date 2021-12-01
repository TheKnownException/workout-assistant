import { Schema, model } from 'mongoose'

const WorkoutRoutine = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  groups: [{ type: Schema.Types.ObjectId, ref: 'WorkoutGroup' }],
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

export default model('WorkoutRoutine', WorkoutRoutine)
