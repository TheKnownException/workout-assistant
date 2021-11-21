import Chance from 'chance'

import createUser from '../create-user'
import generateUserInput from '../__mocks__/generateUserInput'

const user = generateUserInput()
const chance = new Chance()

describe('Views', () => {
  describe('Create User', () => {
    it('Should create and return user without password', async () => {
      const result = await createUser(user)
      expect(result).toHaveProperty('_id')
      expect(result).toHaveProperty('email', user.email)
      expect(result).not.toHaveProperty('password')
    })

    it('Should try to create the same user again, and return error', async () => {
      const result = await createUser(user)
      expect(result).toHaveProperty('error')
      expect(result.error).toMatchObject({ message: 'Email already exists' })
    })

    it('Should try to create the an user without email, and return error', async () => {
      const { email, ...brokenUser } = user
      const result = await createUser(brokenUser)
      expect(result).toHaveProperty('error')
      expect(result.error).toMatchObject({
        message: '"email" is required',
        field: 'email'
      })
    })

    it('Should try to create the an user without password, and return error', async () => {
      const { password, ...brokenUser } = user
      const email = chance.email()
      const result = await createUser({ ...brokenUser, email })
      expect(result).toHaveProperty('error')
      expect(result.error).toMatchObject({
        message: '"password" is required',
        field: 'password'
      })
    })

    it('Should try to create the an user without name, and return error', async () => {
      const { name, ...brokenUser } = user
      const email = chance.email()
      const result = await createUser({ ...brokenUser, email })
      expect(result).toHaveProperty('error')
      expect(result.error).toMatchObject({
        message: '"name" is required',
        field: 'name'
      })
    })
  })
})
