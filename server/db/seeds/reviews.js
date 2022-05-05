exports.seed = function (knex) {
  return knex('reviews')
    .del()
    .then(function () {
      return knex('reviews').insert([
        {
          id: 1,
          user_id: 1,
          business_id: 2,
          rating: 3,
          review: 'Pretty good, a bit slow but thorough.',
          date_added: '2022-05-04T21:15:34.334Z',
        },
        {
          id: 2,
          user_id: 1,
          business_id: 1,
          rating: 5,
          review: `Truly incredible! Best house movers I've ever had.`,
          date_added: '2022-05-04T21:15:34.334Z',
        },
        {
          id: 3,
          user_id: 3,
          business_id: 2,
          rating: 4,
          review: 'Solid work, thanks.',
          date_added: '2022-05-04T21:15:34.334Z',
        },
      ])
    })
}
