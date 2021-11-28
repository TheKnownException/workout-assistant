import user from '../../domains/user'
import getOne from '../../views/get-one/get-one'

const gate = async (req, res, next) => {
  const authorization = req.headers.authorization

  if (!authorization) {
    return res.status(401).json({ error: 'No authorization header' })
  }

  const token = user.rules.getTokenFromAuthorizationHeader(authorization)
  const currentUser = await getOne(user, { token })

  if (!currentUser) {
    return res.status(401).json({ error: 'Invalid token' })
  }

  req.locals = req.locals
    ? { ...req.locals, user: currentUser }
    : { user: currentUser }
  next()
}

export default gate
