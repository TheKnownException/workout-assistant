import createUser from '../create-user'

const email = `${Math.random().toString(36).substring(2, 15)}@gmail.com`
const user = {
  email,
  password: 'password',
  name: 'Test Ragdoll',
  bodyInfo: {
    height: 180
  }
}

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
    })
  })
})
