exports.up = function (knex) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.integer('business_id').references('businesses.id')
    // We think ideally these would also be tied to a quote, so there's a verified
    // interaction between the customer and the business before a review
    table.string('rating')
    // Interested to see how you implement ratings as a string.
    table.string('review')
    // Also, can businesses review users, or is there only one direction this can go?
    table.date('date_added')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('reviews')
}
