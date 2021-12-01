import userRoute from './user'
import authRoute from './auth'
import workoutRoutineRoute from './workout-routine'

export default app => {
  authRoute(app), userRoute(app), workoutRoutineRoute(app)
}
