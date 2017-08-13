const getDailyMoods = (db) => {
  return db('dailymoods')
    .join('users', 'user_id', '=', 'users.id')
    .join('moods', 'mood_id', '=', 'moods.id')
    .join('locations', 'location_id', '=', 'locations.id')
    .select('username', 'mood_name', 'mood_type', 'mood_icon', 'location_name')
}

module.exports = {
  getDailyMoods
}
