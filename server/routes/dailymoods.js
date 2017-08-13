var express = require('express')
var router = express.Router()

var dailymoodsDb = require('../db/dailymoods')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  dailymoodsDb.getDailyMoods(db)
    .then(dailymoods => {
      res.json(dailymoods)
    })
})

module.exports = router
