import React from 'react'
import {connect} from 'react-redux'
import { Button, Alert, Grid, Row, Col } from 'react-bootstrap'
import {getDailyMoods, receiveDailyMoodsAction} from '../actions/dailymoods'
import jump from 'jump.js'

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
      <div className="dailymoods-container">
        <Grid>
        <Row className="show-grid">
          {this.props.dailymoods.map((mood, i) => {
            let divStyle = {
              backgroundColor: mood.mood_color,
              width: "100px",
              height: "100px",
              textAlign: "center",
              borderRadius: "5",
              marigin: "0",
              padding: '0'
            }
            return (
              <Col className="dailymoods-col" key={i} sm={6} md={4} lg={6}>
                <div style={divStyle} className="divStyle">
                  <h5>{mood.username}</h5>
                  <h4>{mood.mood_name}</h4>
                  <h6 className="date-location">
                    {mood.location_name} <br />
                    <span className="date">{mood.created_at}</span>
                  </h6>
                </div>
              </Col>
            )
          })}
        </Row>
      </Grid>
      </div>
    )
  }
}
export default Dailymoods
