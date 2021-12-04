import login from '../../views/login'
import createPasswordResetToken from '../../views/create-password-reset-token/create-password-reset-token'
import updateUserPassword from '../../views/update-user-password/update-user-password'

export default app => {
  app.post('/login', async (request, response) => {
    const { body } = request
    const data = await login(body)
    if (data.error) {
      return response.status(400).json(data)
    }
    response.status(201).json(data)
  })

  app.post('/recover-password', async (request, response) => {
    const { body } = request
    const data = await createPasswordResetToken(body)
    if (data.error) {
      return response.status(400).json(data)
    }
    response.status(201).json(data)
  })

  app.put('/recover-password', async (request, response) => {
    const { body } = request
    const data = await updateUserPassword(body)
    if (data.error) {
      return response.status(400).json(data)
    }
    response.status(201).json(data)
  })
}
