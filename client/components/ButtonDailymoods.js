import React from 'react'
import {connect} from 'react-redux'
import { Button, Alert, Grid, Row, Col } from 'react-bootstrap'
import {getDailyMoods, receiveDailyMoodsAction} from '../actions/dailymoods'
import Dailymoods from './Dailymoods'


class ButtonDailymoods extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      showDailymoods: true
    }
  }
  componentWillMount() {
    // this.props.dispatch(getDailyMoods())
  }
  toggleForm(e) {
    if (this.state.showDailymoods === true) {
      this.props.dispatch(getDailyMoods())
    } else {
      this.props.dispatch(receiveDailyMoodsAction([]))
    }
    this.setState({showDailymoods: !this.state.showDailymoods})
  }
  render(){
    return (
      <div className="testClass">
        <Alert>
          <Button name="showDailymoods" bsStyle="warning"
            // onClick={(e)=> this.props.dispatch(getDailyMoods())}>
            onClick={this.toggleForm.bind(this)}>{this.state.showDailymoods ? 'show dailymoods' : 'hide dailymoods'}
          </Button>
        </Alert>
      </div>
    )
  }
}
export default ButtonDailymoods
