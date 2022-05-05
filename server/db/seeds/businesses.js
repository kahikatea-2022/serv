exports.seed = function (knex) {
  return knex('businesses')
    .del()
    .then(function () {
      return knex('businesses').insert([
        {
          id: 1,
          user_id: 1,
          name: 'Plumbers R Us',
          website: 'www.example.com',
          category: 'plumbing',
          logo: 'multer image string placeholder',
          average_rating: 4.6,
        },
        {
          id: 2,
          user_id: 2,
          name: 'Gardenscapes',
          website: 'www.example.com',
          category: 'gardening',
          logo: 'multer image string placeholder',
          average_rating: 2.1,
        },
        {
          id: 3,
          user_id: 3,
          name: 'Earnest Catering',
          website: 'www.example.com',
          category: 'food',
          logo: 'multer image string placeholder',
          average_rating: 5.0,
        },
      ])
    })
}
