import React from 'react'
import {connect} from 'react-redux'
import { Button, Alert } from 'react-bootstrap'
// import { Button } from 'reactstrap'

import {getGreetings} from '../actions/greetings'

const renderGreeting = (greeting, key) => (
  <h1 key={key}>{greeting.text}</h1>
)

const Greetings = ({greetings, dispatch}) => (
  <div>
    <Alert><Button onClick={() => dispatch(getGreetings())}>Show Greetings</Button></Alert>
    {greetings.map(renderGreeting)}
  </div>
)

const mapStateToProps = (state) => {
return {greetings: state.greetings}

}

export default connect(mapStateToProps)(Greetings)
