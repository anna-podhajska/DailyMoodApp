
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('locations', (table) => {
    table.increments('id')
    table.string('location_name')
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('locations')
};
