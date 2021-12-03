import PasswordResetToken from './model'
import rules from './rules'

const controller = {
  create: async ({ email }) => {
    const passwordResetToken = new PasswordResetToken({
      email,
      token: rules.createPasswordResetToken()
    })
    const newPasswordResetToken = await passwordResetToken.save()
    return newPasswordResetToken
  },

  getOne: async data => {
    const passwordResetToken = await PasswordResetToken.findOne(data)
    return passwordResetToken
  },

  delete: async data => {
    const passwordResetToken = await PasswordResetToken.findOneAndDelete(data)
    return passwordResetToken
  }
}

export default controller
