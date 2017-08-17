import request from 'superagent'

//below are moods for users!
export const receiveMoodsUserAction = (moods_forUser) => {
  return {
    type: 'RECEIVE_MOODS_FOR_USER',
    moods_forUser
  }
}

export function getMoods_forUser(userId) {
  return (dispatch) => {
    request
    .get('/api/dailymoods/' + userId)
    .end((err,res) => {
      if (err) {
        console.log(err.message)
      } else {
        dispatch(receiveMoodsUserAction(res.body))
      }
    })
  }
}
