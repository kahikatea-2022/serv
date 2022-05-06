const express = require('express')
const dbJobs = require('../db/jobs')
const dbQuotes = require('../db/quotes')
const dbBusiness = require('../db/business')
const router = express.Router()

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
    res.status(500).json({ message: 'Unable to find busines by job ID' })
  }
})

// GET /business/:businessId
router.get('/:businessId', async (req, res) => {
  console.log('up to route')
  const { businessId } = req.params
  try {
    dbJobs.getBusiness(businessId).then((data) => {
      res.json({ data })
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to find busines by business ID' })
  }
})

// GET /business/jobs
router.get('/jobs', async (req, res) => {
  try {
    dbJobs.getOpenJobs().then((jobs) => {
      res.json({ jobs })
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get list of all jobs' })
  }
})

// POST /business/jobs/:jobsId/addquote
router.post('/jobs/:jobId/addquote', async (req, res) => {
  const { jobId } = req.params
  const data = { ...req.body, jobId }
  try {
    await dbQuotes.addQuote(data)
    res.sendStatus(201)
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

module.exports = router
