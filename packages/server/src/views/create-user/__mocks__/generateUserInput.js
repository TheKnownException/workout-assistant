import Chance from 'chance'

export default () => {
  const chance = new Chance()

  const email = chance.email()
  const name = chance.name({ middle: true })
  const password = chance.string({ length: 12 })

  return {
    email,
    password,
    name,
    bodyInfo: {
      height: chance.integer({ min: 120, max: 210 })
    }
  }
}
