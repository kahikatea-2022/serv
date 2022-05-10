const express = require('express')
const dbJobs = require('../db/jobs')
const dbQuotes = require('../db/quotes')
const dbBusiness = require('../db/business')
const router = express.Router()

// If you wanted to have another go at this post-graduation, we think it would 
// be good to rearchitect all the routes, ignoring the two user types. What matters
// from the perspective of the routes would be a single job, a single quote,
// a list of jobs, or a list of quotes. What each type of user will be authorised
// to view will vary, but the routes shouldn't be organised with that in mind.

// GET /business
router.get('/', async (req, res) => {
  try {
    await dbJobs.getOpenJobs().then((jobs) => {
      res.json({ jobs })
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get list of all jobs' })
  }
})

// Get job by job ID
// GET /business/jobs/details/:jobsId
router.get('/jobs/details/:jobId', async (req, res) => {
  const { jobId } = req.params
  try {
    await dbJobs.getJobById(jobId).then((job) => {
      res.json(job)
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to add quote into db' })
  }
})

// GET /business/category/:category
// Get data for the openJobsByCategory state
router.get('/category/:category', async (req, res) => {
  const { category } = req.params
  try {
    await dbJobs.getOpenJobsByCategory(category).then((jobs) => {
      res.json(jobs)
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get list of all jobs' })
  }
})

// Get business details by user ID
// GET /business/details/:userId/
router.get('/details/:userId/', async (req, res) => {
  const { userId } = req.params
  try {
    await dbBusiness.getBusinessByUserId(userId).then((data) => {
      res.json(data)
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to find business by user ID' })
  }
})

// GET /business/user/:userId
// Get data for jobsByUser
router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params
  try {
    await dbJobs.getJobsByUser(userId).then((jobs) => {
      res.json(jobs)
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get list of all jobs' })
  }
})

// GET /business/:jobId
router.get('/:jobId', async (req, res) => {
  const { jobId } = req.params
  try {
    await dbBusiness.getBusiness(jobId).then((data) => {
      res.json(data)
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to find business by job ID' })
  }
})

// Change job status
// PATCH /business/jobs/:jobId Edit business details
router.patch('/jobs/:jobId', async (req, res) => {
  const { jobId } = req.params
  const status = req.body.status
  try {
    await dbJobs.changeJobStatus(jobId, status)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to edit business' })
  }
})

// GET /business/:businessId
router.get('/:businessId', async (req, res) => {
  const { businessId } = req.params
  try {
    await dbJobs.getBusiness(businessId).then((data) => {
      res.json({ data })
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to find busines by business ID' })
  }
})

// POST /business/jobs/:jobId/addquote
router.post('/jobs/:jobId/addquote', async (req, res) => {
  const { jobId } = req.params
  const data = { ...req.body, jobId }
  try {
    dbQuotes.addQuote(data).then(() => {
      res.sendStatus(201)
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to add quote into db' })
  }
})

// GET /business/:id/edit
// Details for edit business form
router.get('/:id/edit', async (req, res) => {
  const { id } = req.params
  try {
    await dbBusiness.getBusiness(id).then((data) => {
      res.json({ data })
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get list of all jobs' })
  }
})

// PUT /business/edit Edit business details
router.put('/:id/edit', async (req, res) => {
  const { id } = req.params
  const data = req.body
  try {
    await dbBusiness.editBusiness(id, data)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to edit business' })
  }
})

// GET /business/quotes/:jobId/:userId
// Triangulate quote from job and (business) user ID
router.get('/quotes/:jobId/:userId', async (req, res) => {
  const { jobId, userId } = req.params
  try {
    await dbQuotes.getQuoteByJobAndUserId(jobId, userId).then((data) => {
      res.json(data)
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get quote data from database' })
  }
})

module.exports = router
