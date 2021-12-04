import error from '../../domains/error'
import user from '../../domains/user'
import passwordResetToken from '../../domains/password-reset-token'

import { logError } from '../../infra/log'
import {
  inputValidation,
  validateTargetPasswordResetToken,
  validateUser
} from './validations'

import getOne from '../get-one'

const updateUserPassword = async body => {
  try {
    inputValidation(body)
    const { token, password } = body

    const taregetPasswordResetToken = await getOne(passwordResetToken, {
      token,
      password
    })
    console.log(taregetPasswordResetToken)
    validateTargetPasswordResetToken(taregetPasswordResetToken)

    const targetUser = await getOne(user, {
      email: taregetPasswordResetToken.email
    })
    console.log(targetUser)
    validateUser(targetUser)

    const encryptedPassword = user.rules.encryptPassword(password)
    const updatedUser = await user.controller.update(targetUser._id, {
      password: encryptedPassword
    })

    return updatedUser
  } catch (err) {
    logError(err)
    return error.rules.handleDefaultErrors(err)
  }
}

export default updateUserPassword
