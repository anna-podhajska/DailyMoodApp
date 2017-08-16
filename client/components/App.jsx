import React from 'react'
import {connect} from 'react-redux'

import Greetings from './Greetings'
import Dailymoods from '../containers/Dailymoods'
import SaveDailymoods from '../containers/SaveDailymoods'
import ShowUserMoods from '../components/ShowUserMoods'

import {requestMoods} from '../actions/moodActions'
import {requestLocations} from '../actions/locationActions'
import {requestUsers} from '../actions/usersAction'
import {getDailyMoods} from '../actions/dailymoods'

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
      <SaveDailymoods />
      <ShowUserMoods />
    </div>
  )}

}

export default connect()(App)
