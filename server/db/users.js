const deleteUsers = (deletedUserId, db) => {
  return db('users')
  .where ('id', deletedUserId)

}

module.exports = {
  deleteUsers,
  getUsers: (db) => db('users').select('users.*')
}
