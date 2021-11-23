import { inputValidation, validateUser, validatePassword } from './validations'
import updateUserToken from '../update-user-token'
import user from '../../domains/user'
import { logError } from '../../infra/log'

const login = async body => {
  const { email, password } = body

  try {
    inputValidation(body)
    const targetUser = await user.controller.getOne({ email: email })
    validateUser(targetUser)
    validatePassword(password, targetUser.password)
    const updatedUser = await updateUserToken(targetUser)
    return { token: updatedUser.token }
  } catch (error) {
    logError(error)
    return { error: error.message }
  }
}

export default login
