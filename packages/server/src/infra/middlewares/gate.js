import user from '../../domains/user'
import getOne from '../../views/get-one/get-one'

const gate = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization
    if (!authorization) {
      return res.status(401).json({ error: 'No authorization header' })
    }

    const token = user.rules.getTokenFromAuthorizationHeader(authorization)
    if (!token) {
      return res.status(401).json({ error: 'Invalid token' })
    }

    const currentUser = await getOne(user, { token })
    if (!currentUser) {
      return res.status(401).json({ error: 'Invalid token' })
    }

    res.locals = res.locals
      ? { ...res.locals, user: currentUser }
      : { user: currentUser }
    next()
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}

export default gate
