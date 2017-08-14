export default function moodReducer (state= [], action) {
  switch(action.type) {
    case 'RECEIVE_MOODS':
      return [...action.moods]
    default:
      return state
  }
}
