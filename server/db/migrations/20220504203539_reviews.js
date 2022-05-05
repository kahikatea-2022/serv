exports.up = function (knex) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.integer('business_id').references('businesses.id')
    table.string('rating')
    table.string('review')
    table.date('date_added')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('reviews')
}
