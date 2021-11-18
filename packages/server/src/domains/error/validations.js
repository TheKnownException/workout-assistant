import constants from './constants'

const validations = {
  missingRequiredFieldError: error => {
    const regex = /Path `(.*)+` is required/
    const match = regex.exec(error.message)
    if (match) {
      throw new Error(constants.FIELD.IS_REQUIRED(match[1]))
    }
  },

  missingPasswordFieldError: error => {
    const regex = /data and salt arguments required/
    const match = regex.exec(error.message)
    if (match) {
      throw new Error(constants.PASSWORD.IS_REQUIRED)
    }
  },

  duplicateConstraintError: error => {
    if (error.code === 11000) {
      throw new Error(constants.EMAIL.ALREADY_EXISTS)
    }
  }
}

export default validations
