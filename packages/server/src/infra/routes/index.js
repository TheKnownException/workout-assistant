import userRoute from './user'
import authRoute from './auth'

export default app => {
  authRoute(app), userRoute(app)
}
