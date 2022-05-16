import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import Nav from './Nav'
import PingRoutes from './PingRoutes'
import Registration from './Registration'
import Users from './Users'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import WelcomeToServ from './home/WelcomeToServ'
import Services from './home/Services'
import Home from './home/Home'
import JobsList from './customer/CustomerJobsList'
import QuotesList from './customer/CustomerQuotesList'
import CustomerJobAdd from './customer/CustomerJobAdd'
import SubmittedMessage from './customer/SubmittedMessage'
import BusinessInfo from './business/BusinessInfo'
import BusinessJobsList from './business/BusinessJobsList'
import CustomerJobCompleted from './customer/CustomerJobCompleted'
import BusinessJobToQuote from './business/BusinessJobToQuote'
import BusinessActiveJob from './business/BusinessActiveJob'
import BusinessCompletedJob from './business/BusinessCompletedJob'
import WaitIndicator from './WaitIndicator'
import BusinessQuotedJob from './business/BusinessQuotedJob'
import CheckoutSuccess from './customer/StripeCheckout/CheckoutSuccess'
import CheckoutCancel from './customer/StripeCheckout/CheckoutCancel'

function App() {
  cacheUser(useAuth0)
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<WelcomeToServ />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/customer/add" element={<CustomerJobAdd />} />
        <Route path="/customer/checkout/cancel" element={<CheckoutCancel />} />
        <Route
          path="/customer/checkout/success"
          element={<CheckoutSuccess />}
        />

        <Route
          path="/customer/completed/:jobsId"
          element={<CustomerJobCompleted />}
        />
        <Route
          path="/customer"
          element={
            <JobsList>
              <WaitIndicator />
            </JobsList>
          }
        />
        <Route
          path="/customer/quote/:jobId"
          element={
            <QuotesList>
              <WaitIndicator />
            </QuotesList>
          }
        />
        <Route
          path="/business/open/:jobId"
          element={
            <BusinessJobToQuote>
              <WaitIndicator />
            </BusinessJobToQuote>
          }
        />
        <Route
          path="/business/active/:jobId"
          element={
            <BusinessActiveJob>
              <WaitIndicator />
            </BusinessActiveJob>
          }
        />
        <Route
          path="/business/quoted/:jobId"
          element={
            <BusinessQuotedJob>
              <WaitIndicator />
            </BusinessQuotedJob>
          }
        />
        <Route
          path="/business/completed/:jobId"
          element={
            <BusinessCompletedJob>
              <WaitIndicator />
            </BusinessCompletedJob>
          }
        />
        <Route
          path="/business"
          element={
            <BusinessJobsList>
              <WaitIndicator />
            </BusinessJobsList>
          }
        />
        <Route
          path="/business/:businessId"
          element={
            <BusinessInfo>
              <WaitIndicator />
            </BusinessInfo>
          }
        />
        {/* <Route path="/business/:jobId" element={} />
        <Route path="/business/jobs" element={} />
        <Route path="/business/jobs/:jobId" element={} /> */}
      </Routes>
    </div>
  )
}

export default App
