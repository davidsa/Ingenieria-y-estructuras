import jwt from 'jsonwebtoken'

const JWT_EXPIRED = 'jwt expired'
const UNAUTHENTICATED = 'Unauthenticated'

export const authenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies
    if (!token) {
      return next(new Error('Unauthenticated'))
    }
    const { username } = jwt.verify(token, process.env.SECRET)
    req.locals = { username }
    next()
  } catch (error) {
    next(error)
  }
}

export const errorHandler = (err, req, res, next) => {
  const message = err.message
  console.error(err)
  if (message === JWT_EXPIRED || message === UNAUTHENTICATED) {
    return res.status(401).end()
  }
  return res.status(500).send({ message })
}
