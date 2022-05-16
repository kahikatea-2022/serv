exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('auth0_id')
    table.string('user_name')
    table.string('email')
    table.string('description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
