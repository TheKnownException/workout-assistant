import constants from './constants'

const validations = {
  duplicateConstraintError: error => {
    if (error.code === 11000) {
      throw new Error(constants.EMAIL.ALREADY_EXISTS)
    }
  }
}

export default validations
