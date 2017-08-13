import request from 'superagent'

export const saveDailyMoodAction = (saveStatus) => {
  return {
    type: 'SAVE_DAILYMOOD',
    saveDailyMoodStatus: saveStatus
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
        dispatch(saveDailyMoodAction('ERROR'))
      }else{
        dispatch(saveDailyMoodAction('SUCCESS'))
      })
    }
  }

}
