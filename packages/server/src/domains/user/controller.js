import User from './model'

const controller = {
  create: async data => {
    const user = new User(data)
    const newUser = await user.save()
    const { password, ...userData } = newUser._doc
    return userData
  },

  getOne: async data => {
    return User.findOne(data)
  }
}

export default controller
