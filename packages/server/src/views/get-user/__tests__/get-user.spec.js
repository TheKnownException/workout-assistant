import { ObjectID } from 'bson'

import getUser from '..'
import createUser from '../../create-user/create-user'
import generateUserInput from '../../../domains/user/__mocks__/generateUserInput'

const generatedUser = generateUserInput()
const fakeId = '9999bb99f999999ec99999e9'
let userId

beforeAll(async () => {
  const newUser = await createUser(generatedUser)
  userId = newUser._id
})

describe('Views', () => {
  describe('Get User', () => {
    it('Should get one user using filter', async () => {
      const result = await getUser(userId)
      expect(result).toHaveProperty('_id')
      expect(result.token).toBe(undefined)
    })
    it('Should try to get one user with a not existant user and return error', async () => {
      const result = await getUser(fakeId)
      expect(result).toHaveProperty('error')
      expect(result.error.message).toMatch(/(.+) not found/g)
    })
  })
})
