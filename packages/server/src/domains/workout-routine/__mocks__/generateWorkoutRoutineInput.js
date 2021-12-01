import Chance from 'chance'

export default userId => {
  const chance = new Chance()
  const name = chance.name()
  const description = chance.sentence({ words: 5 })
  const user = userId

  return {
    name,
    description,
    user
  }
}
