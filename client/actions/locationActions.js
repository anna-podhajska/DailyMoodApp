import request from 'superagent'

export const receiveLocationsAction = (locations) => {
  return {
    type: 'RECEIVE_LOCATIONS',
    locations
  }
}

export const requestLocations = () => {
  return (dispatch) => {
    request
      .get('/api/location')
      .end((err, res) => {
        if (err) {
          console.log(err);
          return
        }
        dispatch(receiveLocationsAction(res.body))
      })
  }
}
