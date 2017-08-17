function moods_forUser (state=[], action) {
  switch(action.type) {
    case "RECEIVE_MOODS_FOR_USER":
      return action.moods_forUser
    default:
    return state
  }
}

export default moods_forUser
