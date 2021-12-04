import updateUserPassword from '..'
import createPasswordResetToken from '../../create-password-reset-token'
import createUser from '../../create-user/create-user'
import passwordResetToken from '../../../domains/password-reset-token'
import generateUserInput from '../../../domains/user/__mocks__/generateUserInput'
import { Chance } from 'chance'

const chance = new Chance()
const generatedUser = generateUserInput()
let newUserEmail
let createdToken

beforeAll(async () => {
  const newUser = await createUser(generatedUser)
  newUserEmail = newUser.email
  await createPasswordResetToken({ email: newUserEmail })
  const { token } = await passwordResetToken.controller.getOne({
    email: newUser.email
  })
  createdToken = token
})

describe('Views', () => {
  describe('Update User Password', () => {
    it('Should update user password and return updated user', async () => {
      const result = await updateUserPassword({
        token: createdToken,
        password: chance.string()
      })
      expect(result).toHaveProperty('_id')
      expect(result).toHaveProperty('email', newUserEmail)
    })
    it('Should try to update user password for an invalid token and return error', async () => {
      const result = await updateUserPassword({
        token: chance.string(),
        password: chance.string()
      })
      expect(result).toHaveProperty('error')
      expect(result.error.message).toMatch(/(.*) not found/)
    })
  })
})
