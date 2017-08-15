import request from 'superagent'

export const receiveUsersAction = (users) => {
  return {
    type: 'RECEIVE_USERS',
    users
  }
}

export const requestUsers = () => {
  return (dispatch) => {
    request
      .get('/api/users')
      .end((err, res) => {
        if (err) {
          console.log(err)
          return
        }
        dispatch(receiveUsersAction(res.body))
      })
  }
}
