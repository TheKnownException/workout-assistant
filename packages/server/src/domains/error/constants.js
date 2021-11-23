const EMAIL = {
  ALREADY_EXISTS: 'Email already exists'
}

const PASSWORD = {
  INVALID: 'Password is invalid'
}

const FIELD = {
  IS_REQUIRED: field => `${field} is required`
}

const MODEL = {
  NOT_FOUND: model => `${model} not found`
}

export default {
  EMAIL,
  FIELD,
  MODEL,
  PASSWORD
}
