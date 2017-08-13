import {combineReducers} from 'redux'

import greetings from './greetings'
import dailymoods from './dailymoods'

export default combineReducers({
  greetings,
  dailymoods
})
