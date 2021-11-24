import { validateData } from './validations'
import error from '../../domains/error'
import { logError } from '../../infra/log'

const getOne = async (domain, filter) => {
  try {
    const data = await domain.controller.getOne(filter)
    validateData(data)
    return data
  } catch (err) {
    logError(err)
    return error.rules.handleDefaultErrors(err)
  }
}

export default getOne
