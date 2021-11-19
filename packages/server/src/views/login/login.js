import user from '../../domains/user'
import { logError } from '../../infra/log'

const getAndValidateUser = async email => {
  const targetUser = await user.controller.getOne({ email: email })
  if (!targetUser) {
    throw new Error('User not found')
  }
  return targetUser
}

const validatePassword = (password, hash) => {
  const isPasswordValid = user.rules.comparePassword(password, hash)
  if (!isPasswordValid) {
    throw new Error('Invalid password')
  }
}

const addTokenToUser = async targetUser => {
  const token = user.rules.createUserToken(targetUser)
  const updatedUser = await user.controller.update(
    { _id: targetUser._id },
    { token }
  )
  return updatedUser
}

const login = async body => {
  const { email, password } = body

  try {
    const targetUser = await getAndValidateUser(email)
    validatePassword(password, targetUser.password)
    const updatedUser = await addTokenToUser(targetUser)
    console.log(updatedUser)
    return { token: updatedUser.token }
  } catch (error) {
    logError(error)
    return { error: error.message }
  }
}

export default login
