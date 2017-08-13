
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('dailymoods', (table) => {
    table.increments('id')
    table.integer('user_id')
    table.integer('mood_id')
    table.integer('location_id')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dailymoods')
};
