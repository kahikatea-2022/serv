import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import Registration from './Registration'
import Users from './Users'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import HowItWorks from './home/HowItWorks'
import Services from './home/Services'

function App() {
  cacheUser(useAuth0)

  return (
    <Layout>
      <Routes>
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/services" element={<Services />} />
        <Route path="/" element={<Users />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Layout>
  )
}

export default App
