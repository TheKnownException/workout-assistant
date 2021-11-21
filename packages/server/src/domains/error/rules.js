import handlers from './handlers'

const rules = {
  handleError: error => ({ error: handlers(error) })
}

export default rules
