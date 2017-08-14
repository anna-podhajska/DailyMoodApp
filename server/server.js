var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')

var greetings = require('./routes/greeting')

const corsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  credentials: true
}

var server = express()
server.use(cors(corsOptions))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))


server.use('/api/greetings', greetings)
server.use('/api/dailymoods', require('./routes/dailymoods'))
server.use('/api/location', require('./routes/location'))

server.get('/api/moods', (req, res) => {
  let db = req.app.get('db')
  db('moods')
    .then(moods => res.json(moods))
})

module.exports = server
