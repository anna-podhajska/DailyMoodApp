import React from 'react'
import {connect} from 'react-redux'
import Greetings from './Greetings'
import Dailymoods from './Dailymoods'
import SaveDailymood from '../containers/SaveDailymood'
import {requestMoods} from '../actions/moodActions'
import {getDailyMoods} from '../actions/dailymoods'
import {requestLocations} from '../actions/locationActions'
import {requestUsers} from '../actions/usersAction'

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(requestMoods())
    this.props.dispatch(requestLocations())
    this.props.dispatch(requestUsers())
    // this.props.dispatch(getDailyMoods())
  }
  render() {
    return (
    <div className='app-container'>
      {/* <Greetings /> */}
      <h1> Wellington mood map </h1>
      <Dailymoods />
      <SaveDailymood />
    </div>
  )}

}

export default connect()(App)
