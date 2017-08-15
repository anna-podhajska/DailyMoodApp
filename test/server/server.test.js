var test = require('ava')
var request = require('supertest')

var server = require('../../server/server')
var setupDb = require('./setup-db')

var usersDb = require('../../server/db/users')

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
