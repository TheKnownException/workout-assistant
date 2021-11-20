import validations from './validations'

const rules = {
  defaultCreateValidations: error => {
    try {
      validations.missingPasswordFieldError(error)
      validations.missingRequiredFieldError(error)
      validations.duplicateConstraintError(error)
      return error
    } catch (error) {
      return { error: error.message }
    }
  }
}

export default rules
