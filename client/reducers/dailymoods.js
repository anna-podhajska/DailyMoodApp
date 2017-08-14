function dailymoods (state=[], action) {
  switch (action.type) {
    case 'RECEIVE_DAILYMOODS':
      return action.dailymoods
    case 'SAVE_DAILYMOOD':
      return [...state, action.newMood]
    default:
      return state
  }
}

export default dailymoods
