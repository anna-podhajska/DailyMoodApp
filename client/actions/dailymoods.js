import request from 'superagent'

//below are moods for users!
export const receiveDailyMoodsAction = (dailymoods) => {
  return {
    type: 'RECEIVE_DAILYMOODS',
    dailymoods
  }
}

export function getDailyMoods() {
  return (dispatch) => {
    request
    .get('/api/dailymoods/')
    .end((err,res)=> {
      if (err) {
        console.log(err.message)
      } else {
        dispatch(receiveDailyMoodsAction(res.body))
      }
    })
  }
}
