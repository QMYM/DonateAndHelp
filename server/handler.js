let db = require('../db/index')
let helper = require('../helper/uitilty')
let bcrypt = require('bcrypt')
let session = require('express-session');
let saltRounds = 10
exports.Signup = function (req, res) {
  var username = req.body.username
  var password = req.body.password
  var email = req.body.email
  db.userDonater.find({ // searching for the username in the schema
    username: username
  }, function (err, data) {
    if (err) {
      res.sendStatus(404)
    } else {
      if (data.length > 0) { // if the username found in the schema, then send error, if not save his/her name and hash his/her password
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

exports.SignupCompany = function (req, res) {
  var username = req.body.username
  var password = req.body.password
  var email = req.body.email
  db.userCompany.find({ // searching for the username in the schema
    username: username
  }, function (err, data) {
    if (err) {
      res.sendStatus(404)
    } else {
      if (data.length > 0) { // if the username found in the schema, then send error, if not save his/her name and hash his/her password
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

exports.logout = function (req, res) { // logout and destroy session
  req.session.destroy(function () {
    res.sendStatus(200)
  })
}

exports.LoginCompany = function (req, res) {
  var username = req.body.userName
  var password = req.body.password
  db.userCompany.findOne({ // searching for the username in the schema
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

exports.uploadImage = function(req,res){ // add a personal photo for the user

 var image = req.body.image
 var save = new db.userCompany({
  image:image
})
 save.save(function(err,data){
  if(err){
    throw err
  }else {
      console.log("saved!")
  }
})

 db.userCompany.update({username: req.session.user}, { $set: { image: image }},function(err,data){
   if(err){
     throw err
   }else{
     res.send(data)
   }
 })

}

exports.getImage = function(req,res){
  db.userCompany.findOne({username: req.session.user},function(err,data){
    if(err){
      throw err
    }else {
      res.send(data)
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

exports.addProfileCompany = function (req, res) {
  console.log(req.body,'add profile company')
  console.log('check the session ', req.session.user )
  var name=req.body.name
  var contactNum=req.body.contactNum
  var description=req.body.description
  var address=req.body.address

  db.userCompany.findOne({username:req.session.user},function(err,data){
   

    if(err){
      throw err
    }else{
      var info = new db.userCompany({
        name:name,
        contactNum:contactNum,
        description:description,
        address:address
      })
      info.save(function(err,information){
        if(err){
          throw err
        }else{
          res.send(information)
        }
      })

    }

  })

}

exports.addProfileDonor = function (req, res) {

  console.log('check the session donor', req.session.user )
  var name=req.body.name
  var contactNum=req.body.contactNum
  var description=req.body.description
  var address=req.body.address

  db.userDonater.findOne({username:req.session.user},function(err,data){
   
    if(err){
      throw err
    }else{
      var info = new db.userDonater({
        name:name,
        contactNum:contactNum,
        description:description,
        address:address
      })
      info.save(function(err,information){
        if(err){
          throw err
        }else{
          res.send(information)
        }
      })

    }

  })

}

exports.uploadImageDonor = function(req,res){ // add a personal photo for the user
  
  var image = req.body.image
  var save = new db.userDonater({
    image:image
  })
  save.save(function(err,data){
    if(err){
      throw err
    }else {
     console.log("'here's the data", data)
   }
 })

  db.userDonater.update({username: req.session.user}, { $set: { image: image }},function(err,data){
   if(err){
     throw err
   }else{
     res.send(data)
   }
 })

}

exports.getImageDonor = function(req,res){
  db.userDonater.findOne({username: req.session.user},function(err,data){
    if(err){
      throw err
    }else {
      res.send(data)
    }
  })
}

exports.sendMessage = function(req , res){
  var reciever = req.body.user
  var text = req.body.text 

  db.userCompany.findOne({username : reciever} , function (err , data ) {
    if(err){
      throw err 
      
    }else{
      if(data){
       var message = new db.MessageSchema ({
        sender:req.session.user , 
        reciver:reciever , 
        message:text
      })
       message.save(function(err,data){
        if(err){
          throw err
        }else{
          res.send(data)
        }

      })

     }
     else{
      db.userDonater.findOne({username : reciever} , function (err , data ) {
        if(err){throw err}
          else {
            if(!data){
              res.sendStatus(404);
            }
            else{
              var message = new db.MessageSchema ({
                sender:req.session.user , 
                reciver:reciever , 
                message:text
              })

              

          message.save(function(err,data){

            if(err){
              throw err
            }else{
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
// exports.getPhotoForMessages = function (req, res){
  
//   db.messageSenders(function(err,data){
//     if(err){throw err}else{
//       res.send(data)
//     }
//   })

// }


exports.reciveMessag = function (req , res) {
  db.MessageSchema.find({} , function (err , data) {
    if(err ){throw err}
      res.send(data)
  })
}

exports.uploadImageCampaign = function(req, res){

 var image = req.body.campaignImage;
 console.log(image,"image in post server!");
 var save = new db.companyCampaigns({
  campaignImage:image
})
 save.save(function(err,data){
  if(err){
    throw err
  }else {
    console.log("Campaign image has been posted", data);
  }
})

 db.companyCampaigns.update({username: req.session.user}, { $set: { campaignImage: image }},function(err,data){
   if(err){
     throw err
   }else{
     res.send(data)
   }
 })

}

exports.postCompanyCampaign = function (req , res) {
  
  var campaignName = req.body.campaignName;
  var campaignDescription = req.body.campaignDescription;
  var campaignAmount = req.body.campaignAmount;
  var campaignImage = req.body.campaignImage
   var info = new db.companyCampaigns({
    campaignName: campaignName,
    campaignDescription: campaignDescription,
    campaignAmount: campaignAmount,
    campaignImage: campaignImage,
    username: req.session.user
   })

   info.save(function(err,data){
    if (err){
      throw err
    }else{
      res.sendStatus(201)
    }
  })
  
}

exports.postDonorCampaign = function(req, res){
    var campaignName = req.body.campaignName;
  var campaignDescription = req.body.campaignDescription;
  var campaignAmount = req.body.campaignAmount;
  var campaignImage = req.body.campaignImage
   var info = new db.companyCampaigns({
    campaignName: campaignName,
    campaignDescription: campaignDescription,
    campaignAmount: campaignAmount,
    campaignImage: campaignImage,
    username: req.session.user
   })

   info.save(function(err,data){
    if (err){
      throw err
    }else{
      res.sendStatus(201)
    }
  })
  


}

exports.sessionName = function (req , res) {
  res.send(req.session.user)
}

exports.searchBeneficiary = function(req, res){
  var name = req.body.name;
  //console.log(name, "i am a server");
  db.userDonater.findOne({name:name},function(err,data){
    if(err){
      throw err;
    } else if(!data){
      res.sendStatus(404);
    } else {
      var arr = [];
      arr.push(data);
      res.send(arr);
    }   
  }) 
}

exports.imageSearch = function (req, res){
  db.userDonater.find({}, function(err,data){
    if(err){
      throw err
    } else {
      res.send(data);
    }
  })
}

exports.donorCam = function (req , res) {
  db.companyCampaigns.find({} , function (err , data) {
    if(err){throw err}
      else{
        res.send(data);
      }
  })
}

exports.fetchDonorData = function (req, res){
  db.userDonater.findOne({username: req.session.user}, function(err,data){
    if(err){
      throw err
    }else{
      res.send(data);
    }
  })
}

exports.fetchCompanyData = function (req, res){
  console.log("check", req.session)
  db.userCompany.findOne({username: req.session.user}, function(err,data){
    if(err){
      throw err
    }else{
      res.send(data);
    }
  })
}

exports.searchDonor = function(req, res){
  var name = req.body.name;
  console.log(req.body.name, "donor search name");
  db.userCompany.findOne({name:name},function(err,data){
    if(err){
      throw err;
    } else if(!data){
      res.sendStatus(404);
    } else {
      var arr = [];
      arr.push(data);
      console.log(data.name, "data post search donor")
      res.send(arr);
    }   
  }) 
}

exports.imageSearchDonor = function (req, res){
  db.userCompany.find({}, function(err,data){
    if(err){
      throw err
    } else {
      res.send(data);
    }
  })
}

exports.removeMsg = function(req,res) {
  var user = req.body.user
  var Id = req.body.id
  db.MessageSchema.remove({_id: Id}, function (err, done) {
    if(err){
      throw err
    }else{
      res.sendStatus(201)
    }
  })
}

exports.removeCampaignComp = function(req,res){
  console.log(req.body.CampID, "delete campaign by ID");
  var ID = req.body.CampID;
  db.companyCampaigns.findOneAndRemove({_id: ID}, function(err,data){ 
    if(err){
      throw err
    } else {
      res.sendStatus(200);
    }
  })
}

exports.editCampaignComp = function(req,res){
  console.log(req.body, "edit campaign in server!");
  var campaignID = req.body.campaignID;
  var campaignName = req.body.campaignName;
  var campaignDescription = req.body.campaignDescription;
  var campaignAmount = req.body.campaignAmount;
  var username = req.body.username;
  db.companyCampaigns.findOneAndUpdate({_id:campaignID}, {
   campaignName:campaignName,
   campaignDescription:campaignDescription,
   campaignAmount:campaignAmount,
   username:username
  }, function(error, data){
   if(error){
    throw error
  } else {
    res.send(data);
    }
  
})
}


  
