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

export const deleteUserAction = (deletedUserId) => {
  return {
    type: 'DELETE_USER',
    deletedUserId: deletedUserId //tu bedzie tylko cyfra - id usunietego uz
  }
}
export const requestDeleteUser = (userId) => {
  return (dispatch) => {
    request
      .get('/api/users/'+ userId)
      .end ((err,res) => {
        if (err) {
          console.log(err)
          return
        }
        dispatch(deleteUserAction(res.body.user_id))
      })
  }
}
