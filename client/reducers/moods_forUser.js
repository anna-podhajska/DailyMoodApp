function moods_forUser (state=[], action) {
  switch(action.type) {
    case "RECEIVE_MOODS_FOR_USER":
      return action.moods_forUser
    case 'SAVE_DAILYMOOD':
      return [...state, action.newMood]
    default:
    return state
  }
}

export default moods_forUser
