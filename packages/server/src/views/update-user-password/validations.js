import Joi from 'joi'
import { ValidationError } from '../../domains/error/errors'

const schema = Joi.object().keys({
  token: Joi.string().required(),
  password: Joi.string().required()
})

export const inputValidation = body => {
  const joiValidation = schema.validate(body)
  if (joiValidation.error) {
    const errorDetails = joiValidation.error.details[0]
    throw new ValidationError(errorDetails.message, errorDetails.context.key)
  }
}

export const validateUser = targetUser => {
  if (!targetUser) {
    throw new DataNotFound(error.constants.MODEL.NOT_FOUND('User'))
  }
  return targetUser
}

export const validateTargetPasswordResetToken = targetUser => {
  if (!targetUser) {
    throw new DataNotFound(
      error.constants.MODEL.NOT_FOUND('TargetPasswordResetToken')
    )
  }
  return targetUser
}
