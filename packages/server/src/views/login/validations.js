import Joi from 'joi'
import error from '../../domains/error'
import { ValidationError, DataNotFound } from '../../domains/error/errors'

const schema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

export const inputValidation = body => {
  const joiValidation = schema.validate(body)
  if (joiValidation.error) {
    const errorDetails = joiValidation.error.details[0]
    throw new ValidationError(errorDetails.message, errorDetails.context.key)
  }
}

export const validatePassword = (password, hash) => {
  const isPasswordValid = user.rules.comparePassword(password, hash)
  if (!isPasswordValid) {
    throw new ValidationError(error.constants.PASSWORD.INVALID, 'password')
  }
}

export const validateUser = async targetUser => {
  if (!targetUser) {
    throw new DataNotFound(error.constants.MODEL.NOT_FOUND('User'))
  }
  return targetUser
}
