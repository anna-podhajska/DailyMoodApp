import React from 'react'
import { Button, Alert, Grid, Row, Col } from 'react-bootstrap'
import Link from 'react'
import {getDailyMoods, receiveDailyMoodsAction} from '../actions/dailymoods'
import Dailymoods from './Dailymoods'

class ButtonDeleteUser extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div className="deleteuser-container">
          <Button name="deleteuser-button" bsStyle="warning"
            <Link to=""></Link>
          </Button>
      </div>
    )
  }
}
export default ButtonDailymoods
