import user from '../../domains/user'
import error from '../../domains/error'
import { error_log } from '../../infra/log'

const catchError = err => {
  error_log(err)
  if (err.code === 11000) {
    return { error: error.constants.EMAIL.ALREADY_EXISTS }
  }
  return { error: err.message }
}

const createUser = async body => {
  try {
    const userData = { ...body, role: user.constants.ROLES.user }
    const newUser = await user.controller.create(userData)
    return newUser
  } catch (err) {
    return catchError(err)
  }
}

export default createUser
