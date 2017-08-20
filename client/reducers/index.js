import {combineReducers} from 'redux'

import dailymoods from './dailymoods'
import savedailymood from './savedailymood'
import moods from './moods'
import locations from './locations'
import {usersReducer, deleteUserReducer} from './users'
import moods_forUser from './moods_forUser'

export default combineReducers({
  dailymoods,
  savedailymood,
  moods,
  locations,
  users: usersReducer,
  moods_forUser,
  // deletedUserId: deleteUserReducer
})
