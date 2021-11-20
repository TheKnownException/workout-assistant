import cors from 'cors'
import bodyParser from 'body-parser'

import morgan from './morgan'
import routes from '../routes'

export default app => {
  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(morgan)
  routes(app)
}
