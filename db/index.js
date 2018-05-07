var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Donate')
var bcrypt = require('bcrypt')
// mongoose.connect('mongodb://admin:admin@ds113700.mlab.com:13700/g-db')

var db = mongoose.connection

db.on('error', function () {
  console.log('mongoose connection error')
})

db.once('open', function () {
  console.log('mongoose connected successfully')
})

var Schema = mongoose.Schema

var userDonater = new Schema({
  username: {type: String},
  email: {type: String},
  password: {type: String},
  image: {type: String}
})
var userCompany = new Schema({
  username: {type: String},
  email: {type: String},
  password: {type: String},
  image: {type: String}
})
var userCompany = mongoose.model('userCompany', userCompany)
var userDonater = mongoose.model('userDonater', userDonater)

module.exports.userDonater = userDonater
module.exports.userCompany = userCompany
