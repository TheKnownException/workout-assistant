import Joi from 'joi'

const schema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  bodyInfo: {
    height: Joi.number()
  }
})

const inputValidation = body => {
  const joiValidation = schema.validate(body)
  if (joiValidation.error) {
    throw new Error(joiValidation.error.details[0])
  }
}

export default inputValidation
