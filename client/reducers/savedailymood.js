function savedailymood (state='NONE', action) {
  switch (action.type) {
    case 'SAVE_DAILYMOOD':
      return state
    default:
      return state
  }
}

export default savedailymood
