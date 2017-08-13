
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dailymoods').del()
    .then(function () {
      // Inserts seed entries
      return knex('dailymoods').insert([
        {id: 1, user_id: 1, mood_id: 1, location_id: 1, created_at: 2017/08/13},
        {id: 2, user_id: 2, mood_id: 2, location_id: 2, created_at: 2017/08/13},
        {id: 3, user_id: 3, mood_id: 3, location_id: 3, created_at: 2017/08/13},
        {id: 4, user_id: 4, mood_id: 4, location_id: 4, created_at: 2017/08/13},
        {id: 5, user_id: 5, mood_id: 5, location_id: 5, created_at: 2017/08/13},
        {id: 6, user_id: 6, mood_id: 6, location_id: 6, created_at: 2017/08/13},
        {id: 7, user_id: 7, mood_id: 7, location_id: 7, created_at: 2017/08/13},
        {id: 8, user_id: 8, mood_id: 8, location_id: 8, created_at: 2017/08/13},
        {id: 9, user_id: 9, mood_id: 9, location_id: 9, created_at: 2017/08/13},
        {id: 10, user_id: 10, mood_id: 10, location_id: 10, created_at: 2017/08/13},
        {id: 11, user_id: 11, mood_id: 11, location_id: 11, created_at: 2017/08/13}
      ]);
    });
};
