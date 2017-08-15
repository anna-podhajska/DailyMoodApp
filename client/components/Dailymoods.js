import React from 'react'
import {connect} from 'react-redux'
import { Button, Alert, Grid, Row, Col } from 'react-bootstrap'

import {getDailyMoods} from '../actions/dailymoods'


const Dailymoods = ({dailymoods, dispatch}) => (
  <div>
    <Alert>
      <Button bsStyle="warning"
        onClick={(e)=> dispatch(getDailyMoods())}>
        show dailymoods
      </Button>
    </Alert>

    <Grid>
      <Row className="show-grid">
        {dailymoods.map((mood, i) => {
          return (
            <Col key={i} sm={6} md={4}>
              <div>
                <h1>{mood.mood_name}</h1>
                  {/* <img src={mood.mood_icon}></img> */}
                  <h3>{mood.username}</h3>
                  <h4>in {mood.location_name}</h4>
                  {/* {mood.mood_type}, */}

              </div>
          </Col>
          )
        })}
    </Row>
    </Grid>
  </div>
)

const mapStateToProps = (state) => {
  // console.log(state.dailymoods);
  return {dailymoods: state.dailymoods, }
}

export default connect (mapStateToProps) (Dailymoods)
