import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Dailymoods from '../containers/Dailymoods'
import SaveDailymoods from '../containers/SaveDailymoods'
import ShowUserMoods from '../containers/ShowUserMoods'
import ButtonDailymoods from '../containers/ButtonDailymoods'
import ButtonDeleteUser from '../components/ButtonDeleteUser'
import DeleteUser from '../containers/DeleteUser'

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
  }
  render() {
    return (
      <Router>
        <div className='app-container'>
          <h1> Wellington mood map </h1>
          <Route exact path="/" component={SaveDailymoods} />
          <Route exact path="/" component={ShowUserMoods} />
          <Route exact path="/" component={ButtonDeleteUser} />
          <Route exact path="/" component={ButtonDailymoods} />
          <Route exact path="/" component={Dailymoods} />
          <Route path="/users" component={DeleteUser} />
        </div>
      </Router>
  )}

}
<Route exact path="/" render={() => <Greetings person={this.state.person}/>} />



export default connect()(App)
