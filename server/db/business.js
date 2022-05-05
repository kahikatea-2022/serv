const connection = require('./connection')

function addBusiness(input, db = connection) {
  const { userId, name, website, category, logo } = input
  const business = {
    user_id: userId,
    name,
    website,
    category,
    logo,
    average_rating: null,
  }
  return db('businesses').insert(business)
}

function editBusiness(id, input, db = connection) {
  const { name, website, category, logo } = input
  const business = {
    user_id: id,
    name,
    website,
    category,
    logo,
  }
  return db('businesses').where('id', id).update(business)
}

function getBusiness(id, db = connection) {
  return db('businesses').where('id', id)
  .select()
}


module.exports = {
  addBusiness,
  editBusiness,
  getBusiness
}

