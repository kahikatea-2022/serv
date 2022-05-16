exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('auth0_id')
    table.string('user_name')
    table.string('email')
    table.string('type')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
