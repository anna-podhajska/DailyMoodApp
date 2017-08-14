const saveDailyMood = (db, newmood) => {
  return db('dailymoods')
  .insert(newmood)
}

module.exports = {
  saveDailyMood: (db, newMood) => db('dailymoods').insert(newMood)
}
