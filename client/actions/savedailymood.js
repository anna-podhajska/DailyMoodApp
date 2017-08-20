import request from 'superagent'

export const saveDailyMoodAction = (newMood) => {
  return {
    type: 'SAVE_DAILYMOOD',
    newMood: newMood
  }
}

export function saveDailyMood(newDailyMood) {
  return (dispatch) => {
    request
    .post('/api/dailymoods')
    .send(newDailyMood)
    .end((err,res) => {
      if(err) {
        console.log(err.message)
      } else {
        dispatch(saveDailyMoodAction(res.body))
      }
    })
  }
}
