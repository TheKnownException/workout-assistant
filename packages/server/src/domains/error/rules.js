import validations from './validations'

const rules = {
  defaultCreateValidations: error => {
    try {
      validations.schemaValidation(error)
      validations.duplicateConstraintError(error)
      return error
    } catch (error) {
      return { error: error.message }
    }
  }
}

export default rules
