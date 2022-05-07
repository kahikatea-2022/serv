const connection = require('./connection')

function addQuote(input, db = connection) {
  const { userId, jobId, price, notes } = input
  const quote = {
    user_id: userId,
    job_id: jobId,
    price,
    date_added: new Date(Date.now()),
    notes,
    status: 'pending',
  }
  return db('quotes').insert(quote)
}

function getQuotesByCustomer(id, db = connection) {
  return db('quotes')
    .where('user_id', id)
    .select(
      'id',
      'user_id as userId',
      'business_id as businessId',
      'job_id as jobId',
      'price',
      'date_added as dateAdded',
      'notes',
      'status'
    )
}

function getQuotesByJob(id, db = connection) {
  return db('quotes')
    .where('job_id', id)
    .select(
      'id',
      'user_id as userId',
      'business_id as businessId',
      'job_id as jobId',
      'price',
      'date_added as dateAdded',
      'notes',
      'status'
    )
}

function getQuote(id, db = connection) {
  return db('quotes')
    .where('id', id)
    .select(
      'id',
      'user_id as userId',
      'business_id as businessId',
      'job_id as jobId',
      'price',
      'date_added as dateAdded',
      'notes',
      'status'
    )
}

function editQuoteStatus(quoteId, status, db = connection) {
  return db('quotes').where('id', quoteId).update('status', status)
}

module.exports = {
  addQuote,
  getQuotesByCustomer,
  getQuotesByJob,
  getQuote,
  editQuoteStatus,
}
