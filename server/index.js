let express = require('express')
let session = require('express-session')
let bodyParser = require('body-parser')
let handler = require('./handler')
var path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '../react-client/dist')))
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
app.use(session({
  secret: 'very very secret',
  resave: true,
  saveUninitialized: true
}))

app.post('/loginCompany', handler.LoginCompany)
app.post('/loginDonater', handler.LoginDonater) 
app.post('/Donater', handler.Signup)
app.post('/Company', handler.SignupCompany)
app.get('/logout', handler.logout)
app.get('/recieveMessage', handler.reciveMessag)
app.post('/sendMessage' , handler.sendMessage)
app.get("/sessionName",handler.sessionName)
app.get('/*' , (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, '../react-client/dist/index.html')))
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`The Port : ${PORT}`)
})
