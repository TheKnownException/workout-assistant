import constants from './constants'
import { DuplicateConstraintError, ValidationError } from './errors'

const handlers = {
  defaultHandler: error => ({ message: error.message }),

  validationErrorHandler: error => ({
    message: error.message,
    field: error.field
  }),

  duplicateConstraintError: error => {
    if (error.code === 11000) {
      throw new Error(constants.EMAIL.ALREADY_EXISTS)
    }
  }
}

const CUSTOM_ERRORS_LITERAL = [
  {
    instance: ValidationError,
    handler: err => handlers.validationErrorHandler(err)
  },
  {
    instance: DuplicateConstraintError,
    handler: err => handlers.validationErrorHandler(err)
  }
]

const getHandler = error => {
  const literal = CUSTOM_ERRORS_LITERAL.find(
    ({ instance }) => error instanceof instance
  )
  return literal ? literal.handler(error) : handlers.defaultHandler(error)
}

export default getHandler
