import error from '../../domains/error'
import { validateData } from './validations'

const getOne = async (domain, filter) => {
  try {
    const data = await domain.getOne(filter)
    validateData(data)
    return data
  } catch (err) {
    return error.rules.handleDefaultErrors(err)
  }
}

export default getOne
