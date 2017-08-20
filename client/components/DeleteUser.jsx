import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Button, Alert, Grid, Row, Col } from 'react-bootstrap'
import {requestDeleteUser} from '../actions/usersAction'

class DeleteUser extends React.Component {
    constructor(props) {
        super(props)
    }

  deleteUser(id) {
    this.props.dispatch(requestDeleteUser(id))
  }

    render() {
      return (
          <div className="container">
              <h1>Manage Users</h1>
              {this.props.users.map((user, i) => {
                  return (
                    <table className="table">
                        <thead>
                          <tr>
                            <th>{user.username}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><Link to="/users" onClick={this.deleteUser.bind(this, user.id)}>delete</Link></td>
                            <td>edit</td>
                          </tr>
                        </tbody>
                      </table>
                  )
              })}
            <Button className="alert"><a href="#"> home </a></Button>
          </div>
      )
    }

}

export default DeleteUser
