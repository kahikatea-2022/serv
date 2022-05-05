exports.seed = function (knex) {
  return knex('quotes')
    .del()
    .then(function () {
      return knex('quotes').insert([
        {
          id: 1,
          user_id: 1,
          job_id: 2,
          price: 500,
          date_added: '2022-05-04T21:15:34.334Z',
          notes: 'We can do it for 500 if its quick',
          status: 'pending',
        },
        {
          id: 2,
          user_id: 1,
          job_id: 1,
          price: 1000,
          date_added: '2022-05-04T21:15:34.334Z',
          notes: 'price excludes materials',
          status: 'accepted',
        },
        {
          id: 3,
          user_id: 2,
          job_id: 2,
          price: 5099,
          date_added: '2022-05-04T21:15:34.334Z',
          notes: null,
          status: 'rejected',
        },
      ])
    })
}
