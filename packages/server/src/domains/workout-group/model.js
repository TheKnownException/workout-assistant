import { Schema, model } from 'mongoose'

const WorkoutGroup = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  tag: { type: String, required: false },
  exercises: [
    {
      name: { type: String, required: true },
      technique: { type: String, required: true },
      equipment: { type: String, required: true },
      details: { type: String, required: false },
      set: { type: Number, required: false },
      repetitions: { type: Number, required: true }
    }
  ]
})

export default model('WorkoutGroup', WorkoutGroup)
