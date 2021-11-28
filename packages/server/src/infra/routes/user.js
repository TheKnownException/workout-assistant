import gate from '../middlewares/gate'
import createUser from '../../views/create-user'

export default app => {
  app.post('/user', async (request, response) => {
    const { body } = request
    const data = await createUser(body)
    if (data.error) {
      return response.status(400).json(data)
    }
    response.status(201).json(data)
  })

  app.get('/user/:id', gate, async (request, response) => {
    const { id: userId } = request.params
    const {
      locals: { user }
    } = response

    const data = { user, userId }
    if (data.error) {
      return response.status(400).json(data)
    }
    response.status(201).json(data)
  })
}
