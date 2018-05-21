var mongoose = require('mongoose')
mongoose.Promise = global.Promise
// mongoose.connect('mongodb://localhost/Donate')
mongoose.connect('mongodb://<qays>:<qays123>@ds129670.mlab.com:29670/donate')
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
  image2: {type: String},
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
  image2: {type: String},
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

var donorCampaigns = new Schema({
  campaignName: {type: String},
  campaignDescription: {type: String},
  campaignAmount: {type: String},
  campaignImage: {type: String},
  username: {type: String}
})

const messageSchema = new Schema({
  sender: {
    type: String,
    required: true
  },
  reciver: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  }

})

MessageSchema = mongoose.model('MessageSchema', messageSchema)
var messageSenders = function (callback) {
  MessageSchema.aggregate([
    {
      $lookup: {
        from: 'usercompanies',
        localField: 'sender',
        foreignField: 'username',
        as: 'userRole'
      }
    },
    {
      $lookup: {
        from: 'userdonaters',
        localField: 'sender',
        foreignField: 'username',
        as: 'userInfo'
      }
    }], function (err, data) {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
}

userCompany = mongoose.model('userCompany', userCompany)
userDonater = mongoose.model('userDonater', userDonater)
companyCampaigns = mongoose.model('companyCampaigns', companyCampaigns)
donorCampaigns = mongoose.model('donorCampaigns', donorCampaigns)
MessageSchema = mongoose.model('MessageSchema', messageSchema)

module.exports.messageSenders = messageSenders
module.exports.userDonater = userDonater
module.exports.userCompany = userCompany
module.exports.MessageSchema = MessageSchema
module.exports.companyCampaigns = companyCampaigns
module.exports.donorCampaigns = donorCampaigns
