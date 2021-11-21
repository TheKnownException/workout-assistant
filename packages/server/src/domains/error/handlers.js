import { DuplicateConstraintError, ValidationError } from './errors'

const handlers = {
  defaultHandler: error => ({ message: error.message }),

  validationErrorHandler(error) {
    return {
      message: error.message,
      field: error.field
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
    handler: err => handlers.defaultHandler(err)
  }
]

const getHandler = error => {
  const literal = CUSTOM_ERRORS_LITERAL.find(
    ({ instance }) => error instanceof instance
  )
  return {
    error: literal ? literal.handler(error) : handlers.defaultHandler(error)
  }
}

export default getHandler
