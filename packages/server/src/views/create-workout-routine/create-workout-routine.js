import error from '../../domains/error'
import workoutRoutine from '../../domains/workout-routine'
import { inputValidation } from './validations'

const createWorkoutRoutine = async (body, currentUser) => {
  try {
    inputValidation(body)
    const newWorkoutRoutine = await workoutRoutine.controller.create(
      workoutRoutine.rules.assignCreatorToWorkoutRoutineData(body, currentUser)
    )
    return newWorkoutRoutine
  } catch (err) {
    return error.rules.handleDefaultErrors(err)
  }
}

export default createWorkoutRoutine
