
let db = require('../db/index') // Import index.js file located in db directory
let helper = require('../helper/uitilty') // Import utility.js file in helper directory
let bcrypt = require('bcrypt') // Import bcrypt library
let session = require('express-session') // Import express-session library
let saltRounds = 10 // Using salt hash for password encryption

exports.Signup = function (req, res) { // This function is responsible for the signup of the donor
  var username = req.body.username; // Store the username of the donor user coming from the client side
  var password = req.body.password; // Store the password of the donor user coming from the client side
  var email = req.body.email; // Store the email of the donor user coming from the client side
  db.userDonater.find({ // Search for the username of the donor against donor schema
    username: username
  }, function (err, data) {
    if (err) {
      res.sendStatus(404) // If there is an error in the seeach result, send an error of 404 to the client
    } else {
      if (data.length > 0) { // If the username is found in the donor schema, send an error of 404
        res.sendStatus(404)
      } else {
        bcrypt.genSalt(saltRounds, function (err, salt) { // If the username is not found in the donor schema, generate a salt
          if (err) {
            throw err
          } // Send an error if there is an error on salting process
          bcrypt.hash(password, salt, function (err, hash) { // hash the salted password
            if (err) {
              throw err
            } // If there is an error on the salted password, send  an error
            var user = new db.userDonater({
              username: username,
              email: email,
              password: hash
            }) // Create an object of the new donor user from donor schema
            user.save(function (err, data) {
              if (err) {
                throw err
              } // Save the new donor user in the donor schema
              helper.createSession(req, res, data.username) // Create a session for the donor user
            })
          })
        })
      }
    }
  })
}

exports.SignupCompany = function (req, res) { // This function is responsible for the signup of the beneficiary
  var username = req.body.username; // Store the username of the beneficiary coming from the client
  var password = req.body.password; // Store the password of the beneficiary coming from the client
  var email = req.body.email; // Store the email of the beneficiary coming from the client side
  db.userCompany.find({ // Search the the username against beneficiary schema
    username: username
  }, function (err, data) {
    if (err) {
      res.sendStatus(404) // If there is an error on the search, send an error of 404
    } else {
      if (data.length > 0) { // If the username is found, send an error of 404
        res.sendStatus(404)
      } else {
        bcrypt.genSalt(saltRounds, function (err, salt) { // If the username is not found, salt the password of the beneficiary
          if (err) {
            throw err // Send an error, if there is an error on salting the password
          }
          bcrypt.hash(password, salt, function (err, hash) { // Encrypt the salted password
            if (err) {
              throw err
            } // If there is an error on encrypting the salted password, send an error
            var user = new db.userCompany({
              username: username,
              email: email,
              password: hash
            }) // If the encryption went well, create an object of the user from the beneficiary schema
            user.save(function (err, data) { // Save the new user object in the beneficiary schema
              if (err) {
                throw err // If there is a problem on saving the new user, send an error
              }
              helper.createSession(req, res, data.username) // Create a session for the new beneficiary user
            })
          })
        })
      }
    }
  })
}

exports.logout = function (req, res) { // Logout of the existing and currently logged in user
  req.session.destroy(function () { // Destroy the session of the logged out user
    res.sendStatus(200); // Send a success response to the client for the logged out user
  })
}
  
exports.LoginCompany = function (req, res) { // This function is responsible for the login of the beneficiary user
  var username = req.body.userName; // Store the username of the beneficairy coming from the client side
  var password = req.body.password; // Store the password of the beneficiary coming from the client side
  db.userCompany.findOne({ // Search for the username against beneficiary schema
    username: username
  }, function (err, data) {
    if (err) {
      throw err // Send an error if there is an error on the search function
    } else {
      if (!data) { 
        res.sendStatus(404); // If the username is not existed in the schema, send an error of 404 to the client
      } else {
        bcrypt.compare(password, data.password, function (err, found) { // If the usernmae is existed in the schema, compare the sent password from the user against the existing password in the schema
          if (found) { 
            helper.createSession(req, res, data.username) // If the sent password is correct and matches the stored one in the schema, create a session for the user
          } else {
            res.sendStatus(404); // Send an error of 404 to the client, if the sent password is wrong
          }
        })
      }
    }
  })
}

exports.uploadImage = function (req, res) { // This function will upload the profile image of the beneficiary in the profile page
  var image = req.body.image; // Store the uploaded image by the beneficiary user coming from the client side
  var save = new db.userCompany({
    image: image // Create an object of the uploaded image from the beenficiary schema
  })
  save.save(function (err, data) { // Save the created object of the uploaded image in the schema
    if (err) {
      throw err // Send an error if there's an error on the save
    } else {
      console.log('saved!'); // Send a success response if the uploaded image is saved in the schema and updated
    }
  })
  db.userCompany.update({username: req.session.user}, { $set: { image: image }}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data);
    }
  })
}

exports.uploadImage2 = function (req, res) { // add a personal photo for the user
  var image2 = req.body.image2;
  var save = new db.userCompany({
    image2: image2
  })
  save.save(function (err, data) {
    if (err) {
      throw err
    } else {
      console.log('saved!');
    }
  })
  db.userCompany.update({username: req.session.user}, { $set: { image2: image2 }}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data);
    }
  })
}

exports.getImage = function (req, res) {
  db.userCompany.findOne({username: req.session.user}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data);
    }
  })
}

exports.getImage2 = function (req, res) {
  db.userCompany.findOne({username: req.session.user}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data);
    }
  })
}

exports.LoginDonater = function (req, res) {
  var username = req.body.userName
  var password = req.body.password
  db.userDonater.findOne({ // searching for the username in the schema
    username: username
  }, function (err, data) {
    if (err) {
      throw err
    } else {
      if (!data) { // if he does not exist, then send error, if he exsist compare the password if it right, create session for him/her
        res.sendStatus(404)
      } else {
        bcrypt.compare(password, data.password, function (err, found) {
          if (found) {
            helper.createSession(req, res, data.username)
          } else {
            res.sendStatus(404)
          }
        })
      }
    }
  })
}


exports.getInfoForProfilePage = function(req,res){
  db.userCompany.find({username: req.session.user},function(err,data){
    if(err){
      throw err
    } else {
      res.send(data)
    }
  })
}


exports.getInfoForProfilePageforDonor = function(req,res){
  db.userDonater.find({username: req.session.user},function(err,data){
    if(err){
      throw err
    } else {
      res.send(data)
    }
  })
}

exports.addProfileCompany = function (req, res) {
  console.log("hi phone ", req.body)
  var contactNum = req.body.contactNum
  var description = req.body.description
  var address = req.body.address

  db.userCompany.findOneAndUpdate({username:req.session.user}, {$set:{contactNum:contactNum,description:description,address:address}}, function (err, data) {
    if (err) {
      throw err
    } else {
      var info = new db.userCompany({
        //name: name,
        contactNum: contactNum,
        description: description,
        address: address
      })
      info.save(function (err, information) {
        if (err) {
          throw err
        } else {
          res.send(information)
        }
      })
     

    }
   })
}

exports.addProfileDonor = function (req, res) {
  console.log("hello 3eny", req.body)
  var name = req.body.name
  var contactNum = req.body.contactNum
  var description = req.body.description
  var address = req.body.address
  db.userDonater.findOneAndUpdate({username:req.session.user}, {$set:{name:name,contactNum:contactNum,description:description,address:address}}, function (err, data) {
    if (err) {
      throw err
    } else {
      var info = new db.userDonater({
        name: name,
        contactNum: contactNum,
        description: description,
        address: address
      })
      info.save(function (err, information) {
        if (err) {
          throw err
        } else {
          res.send(information)
        }
      })
      

    }
  })
}

exports.uploadImageDonor = function (req, res) { // add a personal photo for the user
  console.log("jackel is here", req.body)
  var image = req.body.image
  var save = new db.userDonater({
    image: image
  })
  save.save(function (err, data) {
    if (err) {
      throw err
    } else {
      console.log("here's the data", data)
    }
  })
  db.userDonater.update({username: req.session.user}, { $set: { image: image }}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data)
    }
  })
}

exports.uploadImageDonor2 = function (req, res) { // add a personal photo for the user
  var image2 = req.body.image2
  var save = new db.userDonater({
    image2: image2
  })
  save.save(function (err, data) {
    if (err) {
      throw err
    } else {
      console.log("here's the data", data)
    }
  })
  db.userDonater.update({username: req.session.user}, { $set: { image2: image2 }}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data)
    }
  })
}

exports.getImageDonor = function (req, res) {
  db.userDonater.findOne({username: req.session.user}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data)
    }
  })
}

exports.getImageDonor2 = function (req, res) {
  db.userDonater.findOne({username: req.session.user}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data)
    }
  })
}

exports.sendMessage = function (req, res) {
  var reciever = req.body.user
  var text = req.body.text

  db.userCompany.findOne({username: reciever}, function (err, data) {
    if (err) {
      throw err
    } else {
      if (data) {
        var message = new db.MessageSchema({
          sender: req.session.user,
          reciver: reciever,
          message: text
        })
        message.save(function (err, data) {
          if (err) {
            throw err
          } else {
            res.send(data)
          }
        })
      } else {
        db.userDonater.findOne({username: reciever}, function (err, data) {
          if (err) { throw err } else {
            if (!data) {
              res.sendStatus(404)
            } else {
              var message = new db.MessageSchema({
                sender: req.session.user,
                reciver: reciever,
                message: text
              })

              message.save(function (err, data) {
                if (err) {
                  throw err
                } else {
                  res.send(data)
                }
              })
            }
          }
        })
      }
    }
  })
}

exports.getPhotoForMessages = function (req, res) {
  db.messageSenders(function (err, data) {
    if (err) { throw err } else {
      res.send(data)
    }
  })
}

exports.reciveMessag = function (req, res) {
  db.MessageSchema.find({}, function (err, data) {
    if (err) { throw err }
    res.send(data)
  })
}

exports.uploadImageCampaign = function (req, res) {
  var image = req.body.campaignImage
  var save = new db.companyCampaigns({
    campaignImage: image
  })
  save.save(function (err, data) {
    if (err) {
      throw err
    } else {
      console.log('Campaign image has been posted', data)
    }
  })
  db.companyCampaigns.update({username: req.session.user}, { $set: { campaignImage: image }}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data)
    }
  })
}

exports.postCompanyCampaign = function (req, res) {
  var campaignName = req.body.campaignName
  var campaignDescription = req.body.campaignDescription
  var campaignAmount = req.body.campaignAmount
  var campaignImage = req.body.campaignImage
  var info = new db.companyCampaigns({
    campaignName: campaignName,
    campaignDescription: campaignDescription,
    campaignAmount: campaignAmount,
    campaignImage: campaignImage,
    username: req.session.user
  })
  info.save(function (err, data) {
    if (err) {
      throw err
    } else {
      res.sendStatus(201)
    }
  })
}

exports.postDonorCampaign = function (req, res) {
  var campaignName = req.body.campaignName
  var campaignDescription = req.body.campaignDescription
  var campaignAmount = req.body.campaignAmount
  var campaignImage = req.body.campaignImage
  var info = new db.donorCampaigns({
    campaignName: campaignName,
    campaignDescription: campaignDescription,
    campaignAmount: campaignAmount,
    campaignImage: campaignImage,
    username: req.session.user
  })
  info.save(function (err, data) {
    if (err) {
      throw err
    } else {
      res.sendStatus(201)
    }
  })
}

exports.sessionName = function (req, res) {
  res.send(req.session.user)
}

exports.searchBeneficiary = function (req, res) {
  var name = req.body.name
  db.userDonater.findOne({username: name}, function (err, data) {
    if(err){
      throw err
    }else{
      if(!data){
        res.sendStatus(404)
      }else{
        res.send(data)
      }
    }
  })
}

exports.imageSearch = function (req, res) {
  db.userDonater.find({}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data)
    }
  })
}

exports.donorCam = function (req, res) {
  db.donorCampaigns.find({}, function (err, data) {
    if (err) { throw err } else {
      res.send(data)
    }
  })
}

exports.companyCam = function (req, res) {
  db.companyCampaigns.find({}, function (err, data) {
    if (err) { throw err } else {
      res.send(data)
    }
  })
}

exports.fetchDonorData = function (req, res) {
  db.userDonater.findOne({username: req.session.user}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data)
    }
  })
}

exports.fetchCompanyData = function (req, res) {
  db.userCompany.findOne({username: req.session.user}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data)
    }
  })
}

exports.searchDonor = function (req, res) {
  var name = req.body.name
  db.userCompany.findOne({username: name}, function (err, data) {
    if (err) {
      throw err
    } else if (!data) {
      res.sendStatus(404)
    } else {
      var arr = []
      arr.push(data)
      res.send(arr)
    }
  })
}

exports.imageSearchDonor = function (req, res) {
  db.userCompany.find({}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data)
    }
  })
}

exports.removeMsg = function (req, res) {
  var user = req.body.user
  var Id = req.body.id
  db.MessageSchema.remove({_id: Id}, function (err, done) {
    if (err) {
      throw err
    } else {
      res.sendStatus(201)
    }
  })
}

exports.removeCampaignComp = function (req, res) {
  var ID = req.body.CampID
  db.companyCampaigns.findOneAndRemove({_id: ID}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.sendStatus(200)
    }
  })
}

exports.editCampaignComp = function (req, res) {
  var campaignID = req.body.campaignID
  var campaignName = req.body.campaignName
  var campaignDescription = req.body.campaignDescription
  var campaignAmount = req.body.campaignAmount
  var username = req.body.username
  db.companyCampaigns.update({_id: campaignID}, { $set: { 
    campaignName: campaignName,
    campaignDescription: campaignDescription,
    campaignAmount: campaignAmount,
    username: username }}, function (error, data) {
    if (error) {
      throw error
    } else {
      res.send(data)
    }
  })
}

exports.removeCampaignDonor = function (req, res) {
  var ID = req.body.CampID
  db.donorCampaigns.findOneAndRemove({_id: ID}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.sendStatus(200)
    }
  })
}

exports.editCampaignDonor = function (req, res) {
  var campaignID = req.body.campaignID
  var campaignName = req.body.campaignName
  var campaignDescription = req.body.campaignDescription
  var campaignAmount = req.body.campaignAmount
  var username = req.body.username
  db.donorCampaigns.findOneAndUpdate({_id: campaignID}, {
    campaignName: campaignName,
    campaignDescription: campaignDescription,
    campaignAmount: campaignAmount,
    username: username
  }, function (error, data) {
    if (error) {
      throw error
    } else {
      res.send(data)
    }
  })
}

exports.deleteAllMessages = function (req,res){
  var user = req.body.user
  db.MessageSchema.remove({sender:user}, function (err, done) {
    if (err) {
      throw err
    } else {
      res.sendStatus(201)
    }
  })

}

exports.editAmount  = function (req , res) {
  var username = req.body.user;
  var amount = parseInt(req.body.amount);

  db.companyCampaigns.findOne({_id : username},
    function (err , data) {
    if(err){
      throw err; 
    } else { 
      var prevAmount = parseInt(data.campaignAmount) ; 
      if (prevAmount  < amount){
        res.sendStatus(401);
      } else {

        amount = prevAmount - amount;

         if (amount === 0){
       amount = "Donation Completed"
      }
        db.companyCampaigns.update({_id : username} , {$set : {campaignAmount : amount.toString()}} , function (err , data) {
          if(err ){
            throw err
          }else{

            res.send(data);
          }
        })
      }
    }
  })

}