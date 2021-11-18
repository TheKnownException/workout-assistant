import User from './model'

const controller = {
  create: async data => {
    const user = new User(data)
    return user.save()
  },

  getOne: async data => {
    return User.findOne(data)
  }
}

export default controller
