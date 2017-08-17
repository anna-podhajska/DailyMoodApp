import React from 'react'
import {connect} from 'react-redux'

import Dailymoods from '../containers/Dailymoods'
import SaveDailymoods from '../containers/SaveDailymoods'
import ShowUserMoods from '../containers/ShowUserMoods'

import {requestMoods} from '../actions/moodActions'
import {requestLocations} from '../actions/locationActions'
import {requestUsers} from '../actions/usersAction'
import {getDailyMoods} from '../actions/dailymoods'
import {receiveMoodsUserAction} from '../actions/moods_forUser'

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(requestMoods())
    this.props.dispatch(requestLocations())
    this.props.dispatch(requestUsers())
    this.props.dispatch(receiveMoodsUserAction([]))
    // this.props.dispatch(getDailyMoods())
  }
  render() {
    return (
    <div className='app-container'>
      <h1> Wellington mood map </h1>
      <SaveDailymoods />
      <Dailymoods />
      <ShowUserMoods />
    </div>
  )}

}

export default connect()(App)
