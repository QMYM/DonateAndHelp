
let db = require('../db/index') 
let helper = require('../helper/uitilty') 
let bcrypt = require('bcrypt') 
let session = require('express-session') 
let saltRounds = 10 // Using salt hash for password encryption
const Nexmo = require('nexmo');

exports.Signup = function (req, res) { // This function is responsible for the signup of the donor
  var username = req.body.username; 
  var password = req.body.password; 
  var email = req.body.email; 
  db.userDonater.find({ 
    username: username
  }, function (err, data) {
    if (err) {
      res.sendStatus(404) 
    } else {
      if (data.length > 0) { 
        res.sendStatus(404)
      } else {
        bcrypt.genSalt(saltRounds, function (err, salt) { 
          if (err) {
            throw err
          } 
          bcrypt.hash(password, salt, function (err, hash) { 
            if (err) {
              throw err
            } 
            var user = new db.userDonater({
              username: username,
              email: email,
              password: hash
            }) 
            user.save(function (err, data) {
              if (err) {
                throw err
              } 
              helper.createSession(req, res, data.username) 
            })
          })
        })
      }
    }
  })
}

exports.SignupCompany = function (req, res) { // This function is responsible for the signup of the beneficiary
  var username = req.body.username; 
  var password = req.body.password; 
  var email = req.body.email; 
  db.userCompany.find({ 
    username: username
  }, function (err, data) {
    if (err) {
      res.sendStatus(404) 
    } else {
      if (data.length > 0) { 
        res.sendStatus(404)
      } else {
        bcrypt.genSalt(saltRounds, function (err, salt) { 
          if (err) {
            throw err 
          }
          bcrypt.hash(password, salt, function (err, hash) { 
            if (err) {
              throw err
            } 
            var user = new db.userCompany({
              username: username,
              email: email,
              password: hash
            }) 
            user.save(function (err, data) { 
              if (err) {
                throw err 
              }
              helper.createSession(req, res, data.username) 
            })
          })
        })
      }
    }
  })
}

exports.logout = function (req, res) { // Logout of the existing and currently logged in user
  req.session.destroy(function () { 
    res.sendStatus(200); 
  })
}
  
exports.LoginCompany = function (req, res) { // This function is responsible for the login of the beneficiary user
  var username = req.body.userName; 
  var password = req.body.password; 
  db.userCompany.findOne({ 
    username: username
  }, function (err, data) {
    if (err) {
      throw err 
    } else {
      if (!data) { 
        res.sendStatus(404); 
      } else {
        bcrypt.compare(password, data.password, function (err, found) { 
          if (found) { 
            helper.createSession(req, res, data.username) 
          } else {
            res.sendStatus(404); 
          }
        })
      }
    }
  })
}

exports.uploadImage = function (req, res) { // This function will upload the profile image of the beneficiary in the profile page
  var image = req.body.image; 
  var save = new db.userCompany({
    image: image 
  })
  save.save(function (err, data) { 
    if (err) {
      throw err 
    } else {
      console.log('saved!'); 
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

exports.uploadImage2 = function (req, res) { // This function will upload the background image of the beneficiary in the
// profile page
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
} // This function will retrieve the profile image of the beneficiary in the profile page

exports.getImage2 = function (req, res) {
  db.userCompany.findOne({username: req.session.user}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data);
    }
  })
} // // This function will retrieve the background image of the beneficiary in the profile page

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
} // This function will retrieve beneficiary profile information for the beneficiary profile page


exports.getInfoForProfilePageforDonor = function(req,res){
  db.userDonater.find({username: req.session.user},function(err,data){
    if(err){
      throw err
    } else {
      res.send(data)
    }
  })
} // This function will retrieve donor profile information in the donor profile page

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
} // This function is for adding/editing the beneficiary profile information in the profile page

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
} // // This function is responsible for adding donor profile information in the donor profile page

exports.uploadImageDonor = function (req, res) { // add a personal photo for the user
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
} // This function is for uploading the profile image of the donor in the donor profile page

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
} // This function is for uploading the background image of the donor in the donor profile page

exports.getImageDonor = function (req, res) {
  db.userDonater.findOne({username: req.session.user}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data)
    }
  })
} // This function is for retrieving the profile image of the donor in the donor profile page

exports.getImageDonor2 = function (req, res) {
  db.userDonater.findOne({username: req.session.user}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data)
    }
  })
} // This function is for retrieving the background image of thedonor in the donor profile page

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
} // // This function is to upload image campaigns in the beneficiary campaign page

exports.postCompanyCampaign = function (req, res) {
  var campaignName = req.body.campaignName;
  var campaignDescription = req.body.campaignDescription;
  var campaignAmount = req.body.campaignAmount;
  var campaignImage = req.body.campaignImage;
  var category = req.body.category;
  var info = new db.companyCampaigns({
    campaignName: campaignName,
    campaignDescription: campaignDescription,
    campaignAmount: campaignAmount,
    campaignImage: campaignImage,
    username: req.session.user,
    category: category
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
} // // This function is to add campaign information in the donor campaign page

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
} // // This function is to retrieve the donor information for the beneficiary search function

exports.imageSearch = function (req, res) {
  db.userDonater.find({}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data)
    }
  })
} // // This function is to retrieve the image of the donor for the beneficiary search function

exports.donorCam = function (req, res) {
  db.donorCampaigns.find({}, function (err, data) {
    if (err) { throw err } else {
      res.send(data)
    }
  })
} // This function is to retrieve the donor campaigns in the donor profile page

exports.companyCam = function (req, res) {
  db.companyCampaigns.find({}, function (err, data) {
    if (err) { throw err } else {
      res.send(data)
    }
  })
} // This function is to retrieve the beneficiary campaigns in the beneficiary profile page

exports.fetchDonorData = function (req, res) {
  db.userDonater.findOne({username: req.session.user}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data)
    }
  })
} // This function is retrieve some information of the donor in the profile page

exports.fetchCompanyData = function (req, res) {
  db.userCompany.findOne({username: req.session.user}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data)
    }
  })
} // // This function is retrieve some information of the beneficiary in the profile page

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
} // This function is to retrieve the beneficiary information for the donor search function 

exports.imageSearchDonor = function (req, res) {
  db.userCompany.find({}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data)
    }
  })
} // This function is to retrieve the image of the beneficiary for the donor search function

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
} // This function is to delete beneficiary campaigns in the beneficiary profile page

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
} // // This function is to edit beneficiary campaign infomration in the beneficiary profile page 

exports.removeCampaignDonor = function (req, res) {
  var ID = req.body.CampID
  db.donorCampaigns.findOneAndRemove({_id: ID}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.sendStatus(200)
    }
  })
} // This function is to delete donor campaigns in the donor profile page

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
} // This function is to edit donor campaign infomrationin the donor profile page 

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
    } 
    else if(data.campaignAmount === "Donation Completed"){
      res.sendStatus(202)
    }

    else { 
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

} // This function will deduct the amounts donated by donors from the the total amount requested by the beneficiary in the campaign


exports.serveiceSms = function (req, res) { 
  const nexmo = new Nexmo({
  apiKey: '838662f6',
  apiSecret: 'g85V0tSPQDaC4O3N'
});


  const text = req.body.text;
 nexmo.message.sendSms("Hello From Duraidi", '00962787061743', text, (error, response) => {
  if(error) {
    throw error;
  } else if(response.messages[0].status != '0') {
    console.error('here here here',response.messages);
   console.log( 'Nexmo returned back a non-zero status');
  } else {
    console.log("jackel jackel",response);
    res.sendStatus(201)
  }
});
} // Sending SMS to project team through Nexmo API



exports.serveiceSmsDuraidi = function (req, res) { 
const Duraidi = new Nexmo({
  apiKey: '17a02e40',
  apiSecret: 'gIYjQnO6z6LI6guT'
});
  const text = req.body.text;
 Duraidi.message.sendSms("Hello From Duraidi", '00962797590369', text, (error, response) => {
  if(error) {
    throw error;
  } else if(response.messages[0].status != '0') {
    console.error('here here here',response.messages);
   console.log( 'Nexmo returned back a non-zero status');
  } else {
    console.log("jackel jackel",response);
    res.sendStatus(201)
  }
});
}

exports.serveiceSmsYussur = function (req, res) { 
const Yussur = new Nexmo({
  apiKey: 'c69f71a1',
  apiSecret: 'mbK1cnVdLch91u7v'
});
  const text = req.body.text;
 Yussur.message.sendSms("Hello World!", '00962796906650', text, (error, response) => {
  if(error) {
    throw error;
  } else if(response.messages[0].status != '0') {
    console.error('here here here',response.messages);
   console.log( 'Nexmo returned back a non-zero status');
  } else {
    console.log("jackel jackel",response);
    res.sendStatus(201)
  }
});
}

exports.serveiceSmsMais = function (req, res) { 
  const text = req.body.text;

const Mais = new Nexmo({
  apiKey: '048b0b91',
  apiSecret: '3u9jWe2ocWsTnAKG'
});

 Mais.message.sendSms("Hello World!", '00962776598992', text, (error, response) => {
  if(error) {
    throw error;
  } else if(response.messages[0].status != '0') {
    console.error('here here here',response.messages);
   console.log( 'Nexmo returned back a non-zero status');
  } else {
    console.log("jackel jackel",response);
    res.sendStatus(201)
  }
});
}








