import { getJobs } from '../apis/jobListings'

export const FETCH_JOB_LISTINGS = 'FETCH_JOB_LISTINGS'

export function fetchJobsSuccess(jobs) {
  return {
    type: FETCH_JOB_LISTINGS,
    jobs,
  }
}
//THIS IS INTENDED TO DISPLAY AN INDIVIDUAL CUSTOMER'S **OWN** JOB LISTINGS, NOT ALL THE JOB LISTINGS
export function fetchJobs() {
  return (dispatch) => {
    return getJobs()
      .then((jobs) => {
        dispatch(fetchJobsSuccess(jobs))
        return null
      })
      .catch((err) => {
        // if the error is from our routes, this will use the message our route
        // sends back, rather than the generic 'Internal Server Error' from a
        // status 500
        // if the error is from elsewhere in the Promise chain, there won't be
        // an err.response object, so we use err.message
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}
