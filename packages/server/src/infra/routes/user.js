export default app => {
  app.get('/', (request, response) => {
    return response.json({ message: 'Hello World' })
  })

  app.post('/posts', (request, response) => {
    return response.json({ message: 'New post' })
  })
}
