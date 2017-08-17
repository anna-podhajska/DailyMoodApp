import request from 'superagent'

//below are moods for users!
export const receiveMoodsUserAction = (moods_forUser) => {
  return {
    type: 'RECEIVE_MOODS_FOR_USER',
    moods_forUser
  }
}

export function getMoods_forUser() {
  return (dispatch) => {
    request
    .get('/api/dailymoods/:id')
    .end((err,res)=> {
      if (err) {
        console.log(err.message)
      } else {
        dispatch(receiveMoodsUserAction(res.body, req.params.id))
      }
    })
  }
}
