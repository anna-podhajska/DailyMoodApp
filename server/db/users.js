const deleteUser = (deletedUserId, db) => {
  return db('users')
  .where ('id', deletedUserId)
  .del()
}
const deletemoodsForUser = (deletedUserId, db) => {
  return db('dailymoods')
  .where ('user_id', deletedUserId)
  .del()
}


module.exports = {
  deleteUser,
  deletemoodsForUser,
  getUsers: (db) => db('users').select('users.*')
}
