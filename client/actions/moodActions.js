import request from 'superagent'

export const receiveMoodsAction = (moods) => {
  return {
    type: 'RECEIVE_MOODS',
    moods
  }
}

export const requestMoods = () => {
  return (dispatch) => {
    request
      .get('/api/moods')
      .end((err, res) => {
        if (err) {
          console.log(err);
          return
        }
        dispatch(receiveMoodsAction(res.body))
      })
  }
}
