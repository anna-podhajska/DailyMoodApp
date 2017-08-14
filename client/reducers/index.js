import {combineReducers} from 'redux'

import greetings from './greetings'
import dailymoods from './dailymoods'
import savedailymood from './savedailymood'
import moods from './moods'

export default combineReducers({
  greetings,
  dailymoods,
  savedailymood,
  moods
})
