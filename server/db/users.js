module.exports = {
  getUsers: (db) => db('users').select('users.*')
}
