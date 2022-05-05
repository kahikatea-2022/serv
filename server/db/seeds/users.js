exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          auth0_id: 'auth0 placeholder',
          email: 'example1@example.com',
          type: 'customer',
        },
        {
          id: 2,
          auth0_id: 'auth0 placeholder',
          email: 'example2@example.com',
          type: 'customer',
        },
        {
          id: 3,
          auth0_id: 'auth0 placeholder',
          email: 'example3@example.com',
          type: 'business',
        },
      ])
    })
}
