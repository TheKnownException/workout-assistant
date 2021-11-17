import cors from 'cors'
import bodyParser from 'body-parser'

import routes from '../../routes'
import morgan from './morgan'

export default app => {
  app.use(cors())
  app.use(routes)
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(morgan)
}
