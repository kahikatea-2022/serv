import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import Registration from './Registration'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import HowItWorks from './home/HowItWorks'
import Services from './home/Services'
import Home from './home/Home'
import AddJob from './Customer/AddJob'
import JobsList from './Customer/JobsList'
import QuotesList from './Customer/QuotesList'

function App() {
  cacheUser(useAuth0)

  return (
    <Layout>
      <Routes>
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/services" element={<Services />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/customer/add" element={<AddJob />} />
        {/* THIS IS INTENDED TO DISPLAY AN INDIVIDUAL CUSTOMER'S **OWN** JOB LISTINGS, NOT ALL THE JOB LISTINGS */}
        <Route path="/individualJobsList" element={<JobsList />} />
        <Route path="/customer/quote" element={<QuotesList />} />
      </Routes>
    </Layout>
  )
}

export default App
