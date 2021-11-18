import createUser from '../../views/create-user'

export default app => {
  app.get('/', (request, response) => {
    return response.json({ message: 'Hello World' })
  })

  app.post('/user', async (request, response) => {
    const { body } = request
    const data = await createUser(body)
    if (data.error) {
      return response.status(400).json({ error: data.error })
    }
    response.status(201).json(data)
  })
}
