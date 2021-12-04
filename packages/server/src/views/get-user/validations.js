import error from '../../domains/error'
import { DataNotFound } from '../../domains/error/errors'

export const validateUser = targetUser => {
  if (!targetUser) {
    throw new DataNotFound(error.constants.MODEL.NOT_FOUND('User'))
  }
  return targetUser
}
