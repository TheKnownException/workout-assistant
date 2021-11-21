import inputValidation from './validations'
import user from '../../domains/user'
import error from '../../domains/error'
import { logError } from '../../infra/log'

const createUser = async body => {
  try {
    inputValidation(body)
    const role = user.constants.ROLES.user
    const password = user.rules.encryptPassword(body.password)
    const userData = { ...body, role, password }
    const newUser = await user.controller.create(userData)
    return newUser
  } catch (err) {
    logError(err)
    return error.rules.defaultCreateValidations(err)
  }
}

export default createUser
