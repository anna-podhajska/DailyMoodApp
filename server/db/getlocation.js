const getlocation = (db) => {
  return db('location')
    .select('location.*')
}

module.exports = {
  getlocation: (db) => db('location').select('location/*')
}
