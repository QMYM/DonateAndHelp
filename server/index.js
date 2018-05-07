let express = require('express')
let session = require('express-session')
let bodyParser = require('body-parser')
let handler = require('./handler')

const app = express()

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
app.post('/userType', handler.userType)
app.get('/logout', handler.logout)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`The Port : ${PORT}`)
})
