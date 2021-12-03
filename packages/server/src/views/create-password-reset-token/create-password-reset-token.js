import NodeMailer from '../../infra/mail/mailer'

import user from '../../domains/user'
import error from '../../domains/error'
import passwordResetToken from '../../domains/password-reset-token'

import getOne from '../get-one'
import { validateUser } from '../login/validations'
import { inputValidation } from './validations'

const createPasswordResetToken = async data => {
  try {
    inputValidation(data)
    const { email } = data

    const targetUser = await getOne(user, { email })
    validateUser(targetUser)

    const createdPasswordResetToken =
      await passwordResetToken.controller.create({ email })

    const emailData = passwordResetToken.rules.createResetEmailData(
      createdPasswordResetToken,
      email
    )

    await new NodeMailer().sendMail(emailData)
    return { success: true }
  } catch (err) {
    return error.rules.handleDefaultErrors(err)
  }
}

export default createPasswordResetToken
