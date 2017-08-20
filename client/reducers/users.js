export default function usersReducer(state = [], action) {
  switch(action.type) {
    case 'RECEIVE_USERS':
      return [...action.users]
    default:
      return state
  }
}

export function deleteUserReducer(state = [], action) {
  switch (action.type) {
    case 'DELETE_USER':
      return state.users.filter(function(user) {
        return user !== action.deletedUserId
      })
      break;
    default:
      return state

  }
}
