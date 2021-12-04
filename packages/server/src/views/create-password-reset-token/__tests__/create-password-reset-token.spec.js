import createPasswordResetToken from '..'
import createUser from '../../create-user/create-user'
import generateUserInput from '../../../domains/user/__mocks__/generateUserInput'

const generatedUser = generateUserInput()
let newUserEmail

beforeAll(async () => {
  const newUser = await createUser(generatedUser)
  newUserEmail = newUser.email
})

describe('Views', () => {
  describe('Create Password Reset Token', () => {
    it('Should create a password reset token and return sucess true', async () => {
      const result = await createPasswordResetToken({ email: newUserEmail })
      expect(result).toHaveProperty('success', true)
    })
    it('Should try to create a password reset token for an invalid user and return error', async () => {
      const result = await createPasswordResetToken({
        email: 'batatinha@huemail.com'
      })
      expect(result).toHaveProperty('error')
      expect(result.error.message).toMatch(/(.*) not found/)
    })
  })
})
