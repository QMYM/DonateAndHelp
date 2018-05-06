let express = require('express')
let db = require('../db/index')
let helper = require('../helper/uitilty')
let session = require('express-session')
let bcrypt = require('bcrypt')
let bodyParser = require('body-parser')
let handler = require('./handler')

const app = express()
const saltRounds = 10

app.use(express.static(__dirname + '/../react-client/dist'))
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
app.use(session({
  secret: 'very very secret',
  resave: true,
  saveUninitialized: true
}))

app.post('/login', handler.Login)
app.post('/user', handler.Signup)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`The Port : ${PORT}`)
})
