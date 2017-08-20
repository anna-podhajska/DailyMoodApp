var express = require('express')
var router = express.Router()

var usersDb = require('../db/users')

// this is api/users/:

router.get("/", (req,res) => {
  let db = req.app.get('db')
  usersDb.getUsers(db)
  .then(users => {
    res.json(users)
  })
})


router.delete("/:userId", (req,res) => {
  let db = req.app.get('db')
  let deletedUserId = req.params.userId

  usersDb.deleteUsers(deletedUserId, db)
  .then(deletedUserId => {
    res.json({user_id: deletedUserId})
  })
})

module.exports = router
