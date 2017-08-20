var express = require('express')
var router = express.Router()

var dailymoodsDb = require('../db/dailymoods')

router.get('/:id', (req, res) => {
  let db = req.app.get('db')
  dailymoodsDb.getDailyMoodById(req.params.id, db)
  .then(moodById => {
    res.json(moodById)
  })
})

router.get('/', (req, res) => {
  let db = req.app.get('db')
  dailymoodsDb.getDailyMoods(db)
    .then(dailymoods => {
      res.json(dailymoods)
    })
})

router.post('/', (req, res) => {
  let db = req.app.get('db')
  dailymoodsDb.addNewMood(req.body, db)
    .then(newMood => {
      res.json(newMood)
    })
})



module.exports = router
