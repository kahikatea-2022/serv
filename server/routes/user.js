const express = require('express')

const dbUsers = require('../db/users')
const dbBusiness = require('../db/business')
const router = express.Router()

// POST /api/v1/user
router.post('/', async (req, res) => {
  console.log(req.body);
  // Some users are not businesses and some are - filter and handle accordingly
  const { auth0Id, email, type, name, description, website, category, logo } =
    req.body
  try {
    const userData = { auth0Id, email, type }
    const userId = await dbUsers.addUser(userData)
    if (type === 'business') {
      const businessData = {
        userId,
        name,
        description,
        website,
        category,
        logo,
      }
      await dbBusiness.addBusiness(businessData)
    }
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to insert user into the database' })
  }
})

module.exports = router
