import React from 'react'
import {connect} from 'react-redux'

import {receiveUsersAction} from '../actions/usersAction'
import Dailymoods from './Dailymoods'

class ShowUserMoods extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
      <Dailymoods dailymoods={this.props.usermoods} />
      </div>
    )
  }

}

export default ShowUserMoods
