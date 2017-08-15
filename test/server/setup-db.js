var knex = require('knex')
var config = require('../../knexfile').test

module.exports = (test, server) => {
  // Create a separate in-memory database before each test.
  // In our tests, we can get at the database as `t.context.db`.
  test.beforeEach(function (t) {
    t.context.db = knex(config)
    if (server) {
      server.set('db', t.context.db)
      t.context.app = server
    }

    return t.context.db.migrate.latest()
      .then(function () {
        return t.context.db.seed.run()
      })
  })

  // Destroy the database connection after each test.
  test.afterEach(function (t) {
    return t.context.db.migrate.rollback()
      .then(function () {
        return t.context.db.destroy()
      })
  })
}
