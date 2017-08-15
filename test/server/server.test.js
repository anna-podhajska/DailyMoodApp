var test = require('ava')
var request = require('supertest')

var server = require('../../server/server')
var usersDb = require('../../server/db/users')
var setupDb = require('./setup-db')

setupDb(test,server)

test.cb('GET /testing if get for users work', t => {
  request(t.context.app)
    .get('/api/users')
    .expect(200)
    .end((err,res) => {
      if (err) console.log(err);
      t.is(res.body.length, 11)
      t.end()
    })
})

test.cb('read users db', t => {
  usersDb.getUsers(t.context.db)
    .then(users => {
      t.is(users.length, 11)
      // t.true(users[0].hasOwnProperty('text'))
      t.end()
    })
})
