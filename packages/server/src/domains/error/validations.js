import constants from './constants'

const validations = {
  schemaValidation: error => {
    const {
      type,
      context: { key }
    } = error
    if (type === 'any.required') {
      const newError = new Error(constants.FIELD.IS_REQUIRED(key))
      newError.field = key
      throw newError
    }
  },

  duplicateConstraintError: error => {
    if (error.code === 11000) {
      throw new Error(constants.EMAIL.ALREADY_EXISTS)
    }
  }
}

export default validations
