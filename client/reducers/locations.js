export default function locationsReducer (state= [], action) {
  switch(action.type) {
    case 'RECEIVE_LOCATIONS':
      return [...action.locations]
    default:
      return state
  }
}
