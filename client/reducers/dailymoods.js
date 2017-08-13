function dailymoods (state=[], action) {
  switch (action.type) {
    case 'RECEIVE_DAILYMOODS':
      return [...action.dailymoods]
    default:
      return state
  }
}

export default dailymoods
