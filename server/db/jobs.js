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
      'location',
      'status as jobStatus'
    )
}

// // Get a list of jobs submitted by the current customer.
function getJobsByCustomer(id, db = connection) {
  return db('jobs')
    .leftOuterJoin('quotes', 'jobs.id', 'quotes.job_id')
    .where('jobs.user_id', id)
    .select(
      'jobs.id as id',
      'user_id as userId',
      'jobs.description as description',
      'image',
      'category',
      'price_min as priceMin',
      'price_max as priceMax',
      'jobs.date_added as dateAdded',
      'location',
      'jobs.status as jobStatus',
      'quotes.business_id as businessId',
      'quotes.price as price',
      'quotes.date_added as quoteDateAdded',
      'quotes.notes as quoteDescription',
      'quotes.status as quoteStatus'
    )
}

function addJob(input, db = connection) {
  const { userId, description, image, category, priceMin, priceMax, location } =
    input
  const job = {
    user_id: userId,
    description,
    image,
    category,
    price_min: priceMin,
    price_max: priceMax,
    date_added: new Date(Date.now()),
    location,
    status: 'open',
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
      'location',
      'status as jobStatus'
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
    location,
  } = input
  const job = {
    user_id: userId,
    description,
    image,
    category,
    price_min: priceMin,
    price_max: priceMax,
    date_added: dateAdded,
    location,
    status,
  }
  return db('jobs').where('id', id).update(job)
}

function getOpenJobsByCategory(category, db = connection) {
  return db('jobs')
    .where('category', category)
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
      'location',
      'status as jobStatus'
    )
}

function getJobsByUser(userId, db = connection) {
  return db('jobs')
    .join('quotes', 'jobs.id', 'quotes.job_id')
    .join('businesses', 'businesses.id', 'quotes.business_id')
    .join('users', 'users.id', 'businesses.user_id')
    .where('businesses.user_id', userId)
    .select(
      'jobs.id',
      'jobs.user_id as userId',
      'description',
      'image',
      'jobs.category',
      'jobs.price_min as priceMin',
      'jobs.price_max as priceMax',
      'jobs.date_added as dateAdded',
      'quotes.status as quoteStatus',
      'jobs.location as location',
      'businesses.location as businessLocation',
      'jobs.status as jobStatus'
    )
}

function changeJobStatus(jobId, status, db = connection) {
  return db('jobs').where('id', jobId).update('status', status)
}

module.exports = {
  getOpenJobs,
  getJobsByCustomer,
  addJob,
  getJobById,
  editJob,
  getOpenJobsByCategory,
  getJobsByUser,
  changeJobStatus,
}
