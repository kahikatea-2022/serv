const connection = require('./connection')

function getUsers(db = connection) {
  return db('users')
    .select(
      'id',
      'auth0_id as auth0Id',
      'email',
      'type',
      'business_id as businessId'
    )
    .first()
}

function addUser(input, db = connection) {
  const { auth0Id, email, type } = input
  const user = { auth0_id: auth0Id, email, type }
  return db('users').insert(user)
}

module.exports = {
  getUsers,
  addUser,
}
