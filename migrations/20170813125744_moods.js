exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('moods', (table) => {
    table.increments('id')
    table.string('mood_name')
    table.string('mood_type')
    table.string('mood_color')
    table.string('mood_icon')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('moods')
};
