const express = require('express')
const dbJobs = require('../db/jobs')
const dbQuotes = require('../db/quotes')
const router = express.Router()
const path = require('path')

require('dotenv').config({ path: path.join(__dirname, '../', '.env') })
const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY)
// Wow, cool, this is a big thing to tackle for this project!

// POST api/v1/customer/add
router.post('/add', async (req, res) => {
  const data = req.body
  try {
    await dbJobs.addJob(data)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to insert job into the database' })
  }
})

// GET api/v1/customer/:customerId/jobs
router.get('/:customerId/jobs', async (req, res) => {
  const { customerId } = req.params
  try {
    await dbJobs.getJobsByCustomer(customerId).then((jobs) => {
      res.json({ jobs })
      return null
    })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: 'Unable to get list of jobs by customer ID' })
  }
})

// GET api/v1/customer/jobs/:jobId
router.get('/jobs/:jobId', async (req, res) => {
  const { jobId } = req.params
  try {
    await dbJobs.getJobById(jobId).then((job) => {
      res.json({ job })
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get job by job ID' })
  }
})

// PATCH api/v1/customer/jobs/:jobId
router.patch('/jobs/:jobId', async (req, res) => {
  const { jobId } = req.params
  const data = req.body
  try {
    await dbJobs.editJob(jobId, data).then((job) => {
      res.json({ job })
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get list of jobs by job ID' })
  }
})

// GET api/v1/customer/:jobId/quotes
router.get('/quote/:jobId', async (req, res) => {
  const { jobId } = req.params
  try {
    await dbQuotes.getQuotesByJob(jobId).then((quotes) => {
      res.json({ quotes })
      return null
    })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: 'Unable to get list of quotes by customer ID' })
  }
})

// Change quote status
// GET api/v1/customer/jobs/quotes/:quoteId
router.patch('/jobs/quotes/:quoteId', async (req, res) => {
  const { quoteId } = req.params
  const status = req.body.status
  try {
    await dbQuotes.editQuoteStatus(quoteId, status).then((quote) => {
      res.json({ quote })
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get list of jobs by job ID' })
  }
})

// GET api/v1/customer/:jobId/quotes/:quoteId
router.get('/:jobId/quotes/:quoteId', async (req, res) => {
  const { quoteId } = req.params
  try {
    await dbQuotes.getQuote(quoteId).then((quotes) => {
      res.json({ quotes })
      return null
    })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: 'Unable to get list of quotes by customer ID' })
  }
})

router.post('/create-checkout-session', async (req, res) => {
  console.log('yes')
  const { quoteId } = req.body
  const quote = await dbQuotes.getQuote(quoteId)
  console.log(quote[0].priceMax)
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'nzd',
            product_data: {
              name: quote[0].description || 'My Service',
            },
            unit_amount: quote[0].priceMax * 100,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.SERVER_URL}/customer/checkout/success`,
      cancel_url: `${process.env.SERVER_URL}/customer/checkout/cancel`,
    })

    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

module.exports = router
