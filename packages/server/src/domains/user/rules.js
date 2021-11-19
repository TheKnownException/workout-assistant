import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SALT_ROUNDS = 10

const rules = {
  encryptPassword(password) {
    const salt = bcrypt.genSaltSync(SALT_ROUNDS)
    return bcrypt.hashSync(password, salt)
  },

  comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash)
  },

  createUserToken({ _id, email, name }) {
    return jwt.sign({ _id, email, name }, process.env.JWT_SECRET)
  },

  parserUserToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET)
  }
}

export default rules
