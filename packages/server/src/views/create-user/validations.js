import Joi from 'joi'
import { ValidationError } from '../../domains/error/errors'

const schema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  bodyInfo: {
    height: Joi.number(),
    weightHistory: Joi.array().items(
      Joi.object().keys({
        date: Joi.date(),
        weight: Joi.number()
      })
    )
  }
})

export const inputValidation = body => {
  const joiValidation = schema.validate(body)
  if (joiValidation.error) {
    const errorDetails = joiValidation.error.details[0]
    throw new ValidationError(errorDetails.message, errorDetails.context.key)
  }
}
