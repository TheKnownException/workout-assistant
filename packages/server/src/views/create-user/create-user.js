import user from '../../domains/user'
import error from '../../domains/error'
import { logError } from '../../infra/log'

const catchError = err => {
  logError(err)
  if (err.code === 11000) {
    return { error: error.constants.EMAIL.ALREADY_EXISTS }
  }
  return { error: err.message }
}

const createUser = async body => {
  try {
    const role = user.constants.ROLES.user
    const password = user.rules.encryptPassword(body.password)
    const userData = { ...body, role, password }
    const newUser = await user.controller.create(userData)
    return newUser
  } catch (err) {
    return catchError(err)
  }
}

export default createUser
