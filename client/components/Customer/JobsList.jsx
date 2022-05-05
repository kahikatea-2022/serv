import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { fetchJobs } from '../../actions/jobListings'

import JobsListItem from './JobsItem'

//THIS IS INTENDED TO DISPLAY AN INDIVIDUAL CUSTOMER'S **OWN** JOB LISTINGS, NOT ALL THE JOB LISTINGS
function JobsList({ children }) {
  const jobs = useSelector((state) => state.jobListings)
  console.log(jobs)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchJobs())
  }, [])

  function showDetails(){
    //navigate to route that displays Your Listing Details
    navigate('/#')
    return null
  }

  return (
    <div className="jobList">
      {/* {children} This holds the WaitIndicator (from App) */}
      {jobs.map((jobItem) => {
        return (
          <JobsListItem
            key={jobItem.id}
            jobs={jobItem}
            showDetails={showDetails}
          />
        )
      })}
    </div>
  )
}

export default JobsList
