// const getlocation = (db) => {
//   return db('locations')
//     .select('locations.*')
// }

module.exports = {
  getlocation: (db) => db('locations').select('locations.*')
}
