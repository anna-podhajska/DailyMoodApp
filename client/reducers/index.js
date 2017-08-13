import {combineReducers} from 'redux'

import greetings from './greetings'
import dailymoods from './dailymoods'
import savedailymood from './savedailymood'

export default combineReducers({
  greetings,
  dailymoods,
  savedailymood
})
