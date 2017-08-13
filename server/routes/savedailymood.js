var express = require('express')
var router = express.Router()

var savedailymoodDb = require('../db/savedailymood')

router.post('/', (req, res) => {
  let db = req.app.get('db')
  savedailymoodDb.saveDailyMood(db, req.body)
    .then(() => {
      res.sendStatus(200)
    })
})

module.exports = router
