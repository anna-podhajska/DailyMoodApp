import React from 'react'
import {connect} from 'react-redux'
import { Button, Alert, Grid, Row, Col } from 'react-bootstrap'
import {getDailyMoods, receiveDailyMoodsAction} from '../actions/dailymoods'
// import {getDailyMoods} from "../actions/dailymood"
import ButtonDailymoods from './ButtonDailymoods'


class Dailymoods extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      showDailymoods: true
    }
  }

  componentWillMount() {
    // this.props.dispatch(getDailyMoods())
  }
  render(){
    return (
      <div className="testClass">
        <Row className="show-grid">
          {this.props.dailymoods.map((mood, i) => {
            let divStyle = {
              backgroundColor: mood.mood_color,
              width: "100px",
              height: "100px",
              textAlign: "center",
              // borderRadius: "50",
              marigin: "0",
              padding: '0'
            }
            return (
              <Col className="dailymoods-col" key={i} sm={6} md={4} lg={6}>
                <div style={divStyle} className="divStyle">
                  {/* <img src={mood.mood_icon}></img> */}
                  <h5>{mood.username}</h5>
                  <h4>{mood.mood_name}</h4>
                  <h6>
                    {mood.location_name} <br />
                    {mood.created_at}
                  </h6>
                  {/* {mood.mood_type}, */}
                </div>
              </Col>
            )
          })}
        </Row>

      </div>
    )
  }
}
export default Dailymoods
