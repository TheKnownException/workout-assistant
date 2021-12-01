import gate from '../middlewares/gate'
import createWorkoutRoutine from '../../views/create-workout-routine'

export default app => {
  app.post('/workout-routine', gate, async (request, response) => {
    const { body } = request
    const currentUser = response.locals.user
    const data = await createWorkoutRoutine(body, currentUser)
    if (data.error) {
      return response.status(400).json(data)
    }
    response.status(201).json(data)
  })
}
