import login from '..'
import createUser from '../../create-user/create-user'
import generateUserInput from '../../../domains/user/__mocks__/generateUserInput'

const user = generateUserInput()
const unregisteredUser = generateUserInput()

const loginData = user => ({
  email: user.email,
  password: user.password
})

beforeAll(async () => {
  await createUser(user)
})

describe('Views', () => {
  describe('Login user', () => {
    it('Should login user and return a token', async () => {
      const result = await login(loginData(user))
      expect(result).toHaveProperty('token')
    })
    it('Should try to login user without email and return error', async () => {
      const { email, ...withoutEmail } = loginData(user)
      const result = await login(withoutEmail)
      expect(result).toHaveProperty('error')
      expect(result.error).toMatch(/(.+) is required/g)
    })
    it('Should try to login user without password and return error', async () => {
      const { password, ...withoutPassword } = loginData(user)
      const result = await login(withoutPassword)
      expect(result).toHaveProperty('error')
      expect(result.error).toMatch(/(.+) is required/g)
    })
    it('Should try to login an unregistered user', async () => {
      const result = await login(loginData(unregisteredUser))
      expect(result).toHaveProperty('error')
      expect(result.error).toMatch(/(.+) not found/g)
    })
  })
})
