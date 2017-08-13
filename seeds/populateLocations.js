
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, location_name: 'Wellington CBD'},
        {id: 2, location_name: 'Te Aro'},
        {id: 3, location_name: 'Porirua'},
        {id: 4, location_name: 'Petone'},
        {id: 5, location_name: 'Mount Victoria'},
        {id: 6, location_name: 'Brooklyn'},
        {id: 7, location_name: 'Newtown'},
        {id: 8, location_name: 'Hataitai'},
        {id: 9, location_name: 'Kilbirnie'},
        {id: 10, location_name: 'Karori'},
        {id: 11, location_name: 'Hatatai'},
        {id: 12, location_name: 'Island Bay'},
        {id: 13, location_name: 'Miramar'},
        {id: 14, location_name: 'Lyall Bay'}
      ]);
    });
};
