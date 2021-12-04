import User from './model'
import { parseSelectList } from '../../utils/model.utils'
import rules from './rules'

const controller = {
  create: async data => {
    const parsedData = {
      ...data,
      password: rules.encryptPassword(data.password)
    }
    const user = new User(parsedData)
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
    let parsedUpdateData = updateData
    if (updateData.password) {
      parsedUpdateData = {
        ...updateData,
        password: rules.encryptPassword(updateData.password)
      }
    }
    return User.findOneAndUpdate({ _id }, parsedUpdateData, {
      new: true
    }).select(parseSelectList(selections))
  }
}

export default controller
