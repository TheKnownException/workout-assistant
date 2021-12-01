import createUser from '../../create-user/create-user'
import generateUserInput from '../../../domains/user/__mocks__/generateUserInput'
import generateWorkoutRoutineInput from '../../../domains/workout-routine/__mocks__/generateWorkoutRoutineInput'
import createWorkoutRoutine from '../create-workout-routine'

const generatedUser = generateUserInput()
let generatedWorkoutRoutine
let newUser
let userId

beforeAll(async () => {
  newUser = await createUser(generatedUser)
  userId = newUser._id.toString()
  generatedWorkoutRoutine = generateWorkoutRoutineInput(userId)
})

describe('Views', () => {
  describe('Create Workout Routine', () => {
    it('Should create new workout routine', async () => {
      const result = await createWorkoutRoutine(
        generatedWorkoutRoutine,
        newUser
      )
      expect(result).toHaveProperty('_id')
      expect(result.user.toString()).toBe(userId)
      expect(result.createdBy.toString()).toBe(userId)
    })
    it('Should try to create new workout routine without user and return error', async () => {
      const result = await createWorkoutRoutine(
        generatedWorkoutRoutine,
        undefined
      )
      expect(result).toHaveProperty('error')
      expect(result.error.message).toMatch(/(.+) is required/g)
    })
  })
})
