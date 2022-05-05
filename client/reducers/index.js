import { combineReducers } from 'redux'

import users from './users'
import user from './user'
import jobListings from './jobListings'

export default combineReducers({
  users,
  user,
  jobListings,
})
