var express = require('express')
var router = express.Router()

var savedailymoodDb = require('../db/savedailymood')
var dailymoodsDb = require('../db/dailymoods')

router.post('/', (req, res) => {
  let db = req.app.get('db')
  savedailymoodDb.saveDailyMood(db, req.body)
    .then(() => {
       dailymoodsDb.getDailyMoods(db)
       .then(dailymoods => {
        res.json(dailymoods)
        })
      }
    )
})

module.exports = router
