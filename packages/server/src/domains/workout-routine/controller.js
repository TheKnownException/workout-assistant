import WorkoutRoutine from './model'

const controller = {
  create: async data => {
    const workoutRoutine = new WorkoutRoutine(data)
    const newWorkoutRoutine = await workoutRoutine.save()
    return newWorkoutRoutine
  }
}

export default controller
