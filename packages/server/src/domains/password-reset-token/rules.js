import crypto from 'crypto'

const rules = {
  createPasswordResetToken: () => {
    return crypto.randomBytes(20).toString('hex')
  }
}

export default rules
