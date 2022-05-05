exports.up = function (knex) {
  return knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('description')
    table.string('image')
    table.string('category')
    table.int('price_min')
    table.int('price_max')
    table.date('date_added')
    table.string('status')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('jobs')
}
