import user from '../../domains/user'

const updateUserToken = async targetUser => {
  const token = user.rules.createUserToken(targetUser)
  const updatedUser = await user.controller.update(
    { _id: targetUser._id },
    { token },
    ['token']
  )
  return updatedUser
}

export default updateUserToken
