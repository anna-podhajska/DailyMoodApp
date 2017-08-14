var express = require('express')
var router = express.Router()

var locationDb = require('../db/getlocation')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  dailymoodsDb.getLocation(db)
    .then(location => {
      res.json(location)
    })
})

module.exports = router
