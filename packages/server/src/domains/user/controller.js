import User from './model'
import { parseSelectList } from '../../utils/model.utils'

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

  update: async (_id, updateData, selections = []) => {
    return User.findOneAndUpdate({ _id }, updateData, { new: true }).select(
      parseSelectList(selections)
    )
  }
}

export default controller
