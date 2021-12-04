import { ObjectID } from 'bson'
import getOne from '..'
import createUser from '../../create-user/create-user'
import generateUserInput from '../../../domains/user/__mocks__/generateUserInput'
import user from '../../../domains/user'

const generatedUser = generateUserInput()
const fakeId = new ObjectID(123456)
let filter

beforeAll(async () => {
  const newUser = await createUser(generatedUser)
  filter = { _id: newUser._id }
})

describe('Views', () => {
  describe('Get One', () => {
    it('Should get one user using filter', async () => {
      const result = await getOne(user, filter)
      expect(result).toHaveProperty('_id')
      expect(result.token).toBe(undefined)
    })
    it('Should try to get one with a not existant user and return undefined', async () => {
      const result = await getOne(user, { _id: fakeId })
      expect(result).toBe(null)
    })
  })
})
