import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

const rules = {
  encryptPassword(password) {
    const salt = bcrypt.genSaltSync(SALT_ROUNDS)
    return bcrypt.hashSync(password, salt)
  },

  comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash)
  }
}

export default rules
