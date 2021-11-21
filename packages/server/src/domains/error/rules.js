import handler from './handlers'
import parsers from './parsers'

const rules = {
  handleDefaultErrors: error => {
    try {
      parsers.defaultErrorParser(error)
    } catch (error) {
      return handler(error)
    }
  }
}

export default rules
