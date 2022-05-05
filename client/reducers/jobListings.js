import { FETCH_JOB_LISTINGS } from '../actions/jobListings'
//THIS IS INTENDED TO DISPLAY AN INDIVIDUAL CUSTOMER'S **OWN** JOB LISTINGS, NOT ALL THE JOB LISTINGS
export default function jobListings(state = [], action) {
  switch (action.type) {
    case FETCH_JOB_LISTINGS:
      return action.jobs

    default:
      return state
  }
}
