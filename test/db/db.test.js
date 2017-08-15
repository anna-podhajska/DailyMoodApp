var test = require('ava')
var request = require('supertest')

var server = require('../../server/server')
var setupDb = require('../server//setup-db')

var usersDb = require('../../server/db/users')
var locationsDb = require('../../server/db/getlocation')

setupDb(test, server)

test.cb('read users db', t => {
  usersDb.getUsers(t.context.db)
    .then(users => {
      t.is(users.length, 11)
      t.true(users[0].hasOwnProperty('username'))
      t.end()
    })
})

test.cb('read locations db', t => {
  locationsDb.getlocation(t.context.db)
  .then(locations => {
    t.is(locations.length, 14)
    t.true(locations[0].hasOwnProperty('id'))
    t.end()
  })
})
