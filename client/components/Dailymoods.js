import React from 'react'
import {connect} from 'react-redux'
import { Button, Alert, Grid, Row, Col } from 'react-bootstrap'

import {getDailyMoods, receiveDailyMoodsAction} from '../actions/dailymoods'


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
      <div>
        <Alert>
          <Button name="showDailymoods" bsStyle="warning"
            // onClick={(e)=> this.props.dispatch(getDailyMoods())}>
            onClick={this.toggleForm.bind(this)}>{this.state.showDailymoods ? 'show dailymoods' : 'hide dailymoods'}
          </Button>
        </Alert>
        <Grid>
          <Row className="show-grid">
            {this.props.dailymoods.map((mood, i) => {
              let divStyle = {
                backgroundColor: mood.mood_color,
                width: "120px",
                height: "120px",
                textAlign: "center",
                borderRadius: "10"
              }
              return (
                <Col className="dailymoods-col" key={i} sm={6} md={4} lg={6}>
                  <div style={divStyle} className="divStyle">
                    <h3>{mood.mood_name}</h3>
                    {/* <img src={mood.mood_icon}></img> */}
                    <h4>{mood.username}</h4>
                    <h5>{mood.location_name}</h5>
                    <h5>{mood.created_at}</h5>
                    {/* {mood.mood_type}, */}
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

const mapStateToProps = (state) => {
  console.log(state);
  return {dailymoods: state.dailymoods }
}

export default connect (mapStateToProps) (Dailymoods)
