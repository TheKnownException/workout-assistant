export default () => {
  const generateRandomString = () => Math.random().toString(36).substring(2, 15)
  const generateRandomLetters = () =>
    generateRandomString().replace(/[^A-Za-z]+/g, '')

  const email = `${generateRandomString()}@gmail.com`
  const name = `${generateRandomLetters()} ${generateRandomLetters()}`
  const password = generateRandomString()

  return {
    email,
    password,
    name,
    bodyInfo: {
      height: Math.floor(Math.random() * (200 - 120 + 1) + 120)
    }
  }
}
