
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Bob'},
        {id: 2, username: 'Jack'},
        {id: 3, username: 'Ian'},
        {id: 4, username: 'Ela'},
        {id: 5, username: 'Magda'},
        {id: 6, username: 'Mark'},
        {id: 7, username: 'Don'},
        {id: 8, username: 'Irene'},
        {id: 9, username: 'Alicia'},
        {id: 10, username: 'Ted'},
        {id: 11, username: 'Brian'},
      ]);
    });
};
