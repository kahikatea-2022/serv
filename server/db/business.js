const connection = require('./connection')

function addBusiness(input, db = connection) {
  const {
    userId,
    businessName,
    website,
    category,
    logo,
    location,
    ratingCount,
  } = input
  const business = {
    user_id: userId,
    business_name: businessName,
    website,
    category,
    logo,
    location,
    rating_count: ratingCount,
    average_rating: null,
    // Probably don't need to set this at all, since the db defaults it to null already.
  }
  return db('businesses').insert(business)
}

function editBusiness(id, input, db = connection) {
  const { businessName, website, category, logo, location, ratingCount } = input
  const business = {
    user_id: id,
    business_name: businessName,
    website,
    category,
    logo,
    location,
    rating_count: ratingCount,
  }
  return db('businesses').where('id', id).update(business)
}

function getBusinessByUserId(id, db = connection) {
  return db('businesses')
    .join('users', 'users.id', 'businesses.user_id')
    .where('businesses.user_id', id)
    .select(
      'businesses.id',
      'user_id as userId',
      'business_name as businessName',
      'website',
      'category',
      'logo',
      'location',
      'average_rating as averageRating',
      'rating_count as ratingCount'
    )
    .first()
}

function getBusiness(id, db = connection) {
  return db('businesses')
    .where('id', id)
    .select(
      'id',
      'user_id as userId',
      'business_name as businessName',
      'website',
      'category',
      'logo',
      'location',
      'average_rating as averageRating',
      'average_rating as averageRating'
    )
    .first()
}

module.exports = {
  addBusiness,
  editBusiness,
  getBusiness,
  getBusinessByUserId,
}
