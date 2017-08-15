import {combineReducers} from 'redux'

import greetings from './greetings'
import dailymoods from './dailymoods'
import savedailymood from './savedailymood'
import moods from './moods'
import locations from './locations'
import users from './users'

export default combineReducers({
  greetings,
  dailymoods,
  savedailymood,
  moods,
  locations,
  users
})
