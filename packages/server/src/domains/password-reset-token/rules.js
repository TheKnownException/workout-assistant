import crypto from 'crypto'

const rules = {
  createPasswordResetToken: () => {
    return crypto.randomBytes(20).toString('hex')
  },

  createResetEmailData: (token, email) => {
    return {
      to: email,
      subject: 'Workout Assistant - Reset your password',
      html: `<p>You requested a password RESET at Workout Assistant</p>
      Click <a href="${process.env.FRONTEND_URL}/reset-password/${token}">here</a> to reset your password.</p>`
    }
  }
}

export default rules
