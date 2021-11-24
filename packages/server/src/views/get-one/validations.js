import error from '../../domains/error'
import { DataNotFound } from '../../domains/error/errors'

export const validateData = targetData => {
  if (!targetData) {
    throw new DataNotFound(error.constants.MODEL.NOT_FOUND('User'))
  }
}
