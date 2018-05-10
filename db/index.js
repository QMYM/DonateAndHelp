var mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Donate')
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
  image: {type: String},
  name: {type: String},
  contactNum: {type: String},
  description: {type: String},
  address: {type: String}
})
var userCompany = new Schema({
  username: {type: String},
  email: {type: String},
  password: {type: String},
  image: {type: String},
  name: {type: String},
  contactNum: {type: String},
  description: {type: String},
  address: {type: String}
})
var companyCampaigns = new Schema({
  campaignName: {type: String},
  campaignDescription: {type: String},
  campaignAmount: {type: String},
  campaignImage: {type: String},
  username: {type: String}
})


const messageSchema = new Schema({
  sender:{
    type: String,
    required: true
  },
  reciver:  {
    type: String,
    required: true
  },
  message:{
    type: String,
    required: true
  }
  
});

userCompany = mongoose.model('userCompany', userCompany)
userDonater = mongoose.model('userDonater', userDonater)
companyCampaigns = mongoose.model('companyCampaigns', companyCampaigns)
MessageSchema = mongoose.model('MessageSchema', messageSchema)

module.exports.userDonater = userDonater
module.exports.userCompany = userCompany
module.exports.MessageSchema = MessageSchema
module.exports.companyCampaigns = companyCampaigns

