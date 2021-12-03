import { validateData } from './validations'
import error from '../../domains/error'
import { logError } from '../../infra/log'

const getOne = async (domain, filter) => {
  try {
    const data = await domain.controller.getOne(filter)
    validateData(data)
    return data
  } catch (err) {
    throw err
  }
}

export default getOne
