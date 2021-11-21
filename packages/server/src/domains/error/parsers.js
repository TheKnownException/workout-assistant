import constants from './constants'
import { DuplicateConstraintError } from './errors'

const CAUGHT_EXCEPTIONS = [
  {
    name: 'MongoServerError',
    code: 11000,
    exception: new DuplicateConstraintError(constants.EMAIL.ALREADY_EXISTS)
  }
]

const parsers = {
  defaultErrorParser: error => {
    const caughtException = CAUGHT_EXCEPTIONS.find(exception => {
      if (error.code)
        return error.code === exception.code && error.name === exception.name
      if (error.code)
        return error.type === exception.type && error.name === exception.name
      return error.name === exception.name
    })

    if (caughtException) {
      throw caughtException.exception
    }

    throw error
  }
}

export default parsers
