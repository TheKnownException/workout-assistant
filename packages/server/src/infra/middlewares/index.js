import cors from 'cors'
import bodyParser from 'body-parser'

import morgan from './morgan'
import routes from '../routes'

export default server => {
  server.use(cors())
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())
  server.use(morgan)
  routes(server)
}
