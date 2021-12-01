import Joi from 'joi'
import { ValidationError } from '../../domains/error/errors'

const schema = Joi.object().keys({
  name: Joi.string().required(),
  description: Joi.string(),
  user: Joi.string().required()
})

export const inputValidation = body => {
  const joiValidation = schema.validate(body)
  if (joiValidation.error) {
    const errorDetails = joiValidation.error.details[0]
    throw new ValidationError(errorDetails.message, errorDetails.context.key)
  }
}
