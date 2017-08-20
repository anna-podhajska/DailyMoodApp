import React from 'react'
import { Button, Alert, Grid, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'

class ButtonDeleteUser extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div className="deleteuser-container">
          <Button className="deleteuser-button" bsStyle="warning">
            <Link to="/users">delete/manage users</Link>
          </Button>
      </div>
    )
  }
}
export default ButtonDeleteUser
