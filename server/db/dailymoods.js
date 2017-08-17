const getDailyMoods = (db) => {
  return db('dailymoods')
    .join('users', 'user_id', '=', 'users.id')
    .join('moods', 'mood_id', '=', 'moods.id')
    .join('locations', 'location_id', '=', 'locations.id')
    .select('username', 'mood_name', 'mood_type', 'mood_icon', 'location_name', 'mood_color', 'created_at')
}

const getDailyMoodById = (id, db) => {
  return db('dailymoods')
    .join('users', 'user_id', '=', 'users.id')
    .join('moods', 'mood_id', '=', 'moods.id')
    .join('locations', 'location_id', '=', 'locations.id')
    .select('username', 'mood_name', 'mood_type', 'mood_icon', 'location_name', 'mood_color', 'created_at')
    .where('users.id', id)
    // .first()
}

const getDailyMoodById_first = (id, db) => {
  return db('dailymoods')
    .join('users', 'user_id', '=', 'users.id')
    .join('moods', 'mood_id', '=', 'moods.id')
    .join('locations', 'location_id', '=', 'locations.id')
    .select('username', 'mood_name', 'mood_type', 'mood_icon', 'location_name', 'mood_color', 'created_at')
    .where('dailymoods.id', id)
    .first()
}

module.exports = {
  getDailyMoods,
  getDailyMoodById,
  addNewMood: (mood, db) => db('dailymoods').insert(mood).then(mood_id => getDailyMoodById_first(mood_id[0], db) ),
}
