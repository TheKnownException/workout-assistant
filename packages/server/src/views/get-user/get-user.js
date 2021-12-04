import { validateUser } from './validations'
import getOne from '../get-one'

import user from '../../domains/user'
import error from '../../domains/error'

import { logError } from '../../infra/log'

const getUser = async id => {
  try {
    const targetUser = await getOne(user, { _id: id })
    validateUser(targetUser)
    return targetUser
  } catch (err) {
    logError(err)
    return error.rules.handleDefaultErrors(err)
  }
}

export default getUser
