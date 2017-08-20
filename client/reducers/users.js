export function usersReducer(state = [], action) {
  switch(action.type) {
    case 'RECEIVE_USERS':
      return [...action.users]
    case 'DELETE_USER':
    return state.filter(function(user) {
      return user.id != action.deletedUserId
    })
    default:
      return state
  }
}
//
// export function deleteUserReducer(state = [], action) {
//   switch (action.type) {
//     case 'DELETE_USER':
//     // console.log(state);
//       return state.filter(function(user) {
//         return user.id !== action.deletedUserId
//       })
//       break;
//     default:
//       return state
//   }
// }
