exports.up = function (knex) {
  return knex.schema.createTable('businesses', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('name')
    table.string('website')
    table.string('category')
    table.string('logo')
    table.int('average_rating')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('businesses')
}
