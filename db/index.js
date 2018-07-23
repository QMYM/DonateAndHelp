let mongoose = require('mongoose') // Import mongoose module

//mongoose.Promise = global.Promise
//mongoose.connect('mongodb://localhost/Donate', { useMongoClient: true })

// This is to connect the backend to an external DB hosted on https://mlab.com/
mongoose.connect('mongodb://qays:qays123@ds129670.mlab.com:29670/donate')
let db = mongoose.connection // Create mongoose connection for mongodb

db.on('error', function () {
  console.log('mongoose connection error')
}) // This will apply if there is a problem on mongoose connection for mongodb
db.once('open', function () {
  console.log('mongoose connected successfully')
}) // This will apply if mongoose is connected successfully for mongodb

let Schema = mongoose.Schema // Create a mongoose schema

let userDonater = new Schema({
    username: {type: String},
    email: {type: String},
    password: {type: String},
    image: {type: String},
    image2: {type: String},
    name: {type: String},
    contactNum: {type: String},
    description: {type: String},
    address: {type: String}
}) // This schema is for donors

let userCompany = new Schema({
    username: {type: String},
    email: {type: String},
    password: {type: String},
    image: {type: String},
    image2: {type: String},
    name: {type: String},
    contactNum: {type: String},
    description: {type: String},
    address: {type: String}
}) // This schema is for beneficiaries

let companyCampaigns = new Schema({
    campaignName: {type: String},
    campaignDescription: {type: String},
    campaignAmount: {type: String},
    campaignImage: {type: String},
    username: {type: String},
    category: {type: String}
}) // This schema is for beneficary campaigns

let donorCampaigns = new Schema({
    campaignName: {type: String},
    campaignDescription: {type: String},
    campaignAmount: {type: String},
    campaignImage: {type: String},
    username: {type: String}
}) // This schema is for donor campaigns

let messageSchema = new Schema({
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

}) // This schema is for messaging

MessageSchema = mongoose.model('MessageSchema', messageSchema) // Create a model from messages schema

let messageSenders = function (callback) {
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

// Create a model from beneficaries schema
userCompany = mongoose.model('userCompany', userCompany)

// Create a model from donors schema
userDonater = mongoose.model('userDonater', userDonater)

// Create a model from beneficary campaigns schema
companyCampaigns = mongoose.model('companyCampaigns', companyCampaigns)

// Create a model from donor campaigns schema
donorCampaigns = mongoose.model('donorCampaigns', donorCampaigns)

// Create a model from messages schema
MessageSchema = mongoose.model('MessageSchema', messageSchema)

module.exports.messageSenders = messageSenders
module.exports.userDonater = userDonater
module.exports.userCompany = userCompany
module.exports.MessageSchema = MessageSchema
module.exports.companyCampaigns = companyCampaigns
module.exports.donorCampaigns = donorCampaigns
