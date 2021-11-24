import User from './model'

const controller = {
  create: async data => {
    const user = new User(data)
    const newUser = await user.save()
    const { password, ...userData } = newUser._doc
    return userData
  },

  getOne: async (data, hasPassword) => {
    return hasPassword
      ? User.findOne(data).select('+password')
      : User.findOne(data)
  },

  update: async (_id, updateData) => {
    return User.findOneAndUpdate({ _id }, updateData, { new: true })
  }
}

export default controller
