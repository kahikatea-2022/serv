const jwt = require('express-jwt')
const jwks = require('jwks-rsa')
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })

const domain = process.env.AUTH0_DOMAIN
const audience = process.env.AUTH0_AUDIENCE

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`,
  }),
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256'],
})

module.exports = {
  checkJwt,
}
