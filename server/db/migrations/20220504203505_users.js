exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('auth0_id')
    table.string('email')
    table.string('type')
    table.integer('business_id').references('businesses.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}