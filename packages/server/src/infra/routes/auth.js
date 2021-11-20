import login from '../../views/login'

export default app => {
  app.post('/login', async (request, response) => {
    const { body } = request
    const data = await login(body)
    if (data.error) {
      return response.status(400).json({ error: data.error })
    }
    response.status(201).json(data)
  })
}
