const connection = require('./connection')

// Get a list of all jobs that have not already had a quote accepted.
function getOpenJobs(db = connection) {
  return db('jobs')
    .where('status', 'open')
    .select(
      'id',
      'user_id as userId',
      'description',
      'image',
      'category',
      'price_min as priceMin',
      'price_max as priceMax',
      'date_added as dateAdded',
      'status'
    )
}

// Get a list of jobs submitted by the current customer.
function getJobsByCustomer(id, db = connection) {
  return db('jobs')
    .where('user_id', id)
    .select(
      'id',
      'user_id as userId',
      'description',
      'image',
      'category',
      'price_min as priceMin',
      'price_max as priceMax',
      'date_added as dateAdded',
      'status'
    )
}

function addJob(input, db = connection) {
  const {
    userId,
    description,
    image,
    category,
    priceMin,
    priceMax,
    dateAdded,
    status,
  } = input
  const job = {
    user_id: userId,
    description,
    image,
    category,
    price_min: priceMin,
    price_max: priceMax,
    date_added: dateAdded,
    status,
  }
  return db('jobs').insert(job)
}

function getJobById(id, db = connection) {
  return db('jobs')
    .where('id', id)
    .select(
      'id',
      'user_id as userId',
      'description',
      'image',
      'category',
      'price_min as priceMin',
      'price_max as priceMax',
      'date_added as dateAdded',
      'status'
    )
}

function editJob(id, input, db = connection) {
  const {
    userId,
    description,
    image,
    category,
    priceMin,
    priceMax,
    dateAdded,
    status,
  } = input
  const job = {
    user_id: userId,
    description,
    image,
    category,
    price_min: priceMin,
    price_max: priceMax,
    date_added: dateAdded,
    status,
  }
  return db('jobs').where('id', id).update(job)
}

module.exports = {
  getOpenJobs,
  getJobsByCustomer,
  addJob,
  getJobById,
  editJob,
}
