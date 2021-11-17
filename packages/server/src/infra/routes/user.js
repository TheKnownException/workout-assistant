export default server => {
  server.get('/', (request, response) => {
    return response.json({ message: 'Hello World' })
  })

  server.post('/posts', (request, response) => {
    return response.json({ message: 'New post' })
  })
}
