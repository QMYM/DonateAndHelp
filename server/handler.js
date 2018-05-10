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
 console.log('mais mais ' , req.body.image)
 var image = req.body.image
 var save = new db.userCompany({
  image:image
})
 save.save(function(err,data){
  if(err){
    throw err
  }else {
    console.log("'here's the data", data)
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
  console.log(req.body,'hhhhhhhhhhh')
  console.log('check the session ', req.session.user )
  var name=req.body.name
  var contactNum=req.body.contactNum
  var description=req.body.description
  var address=req.body.address

  db.userCompany.findOne({username:req.session.user},function(err,data){
    console.log('mais',data)

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
  console.log(req.body,'donor donor')
  console.log('check the session donor', req.session.user )
  var name=req.body.name
  var contactNum=req.body.contactNum
  var description=req.body.description
  var address=req.body.address

  db.userDonater.findOne({username:req.session.user},function(err,data){
    console.log('mais',data)
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
  console.log('mais mais ' , req.body.image)
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
              res.sendStatus(402);
            }
            else{
              var message = new db.MessageSchema ({
                sender:req.session.user , 
                reciver:reciever , 
                message:text
              })
            }
          }
          message.save(function(err,data){
            if(err){
              throw err
            }else{
              res.send(data)
            }

          })
        }) 
    }
  }

})
}
// exports.getPhotoForMessages = function (req, res){
  
//   db.userCompany.aggregate([{$match:{$or: [{ reciver: req.session.username }, { sender: req.session.username }]}},
//  {
//    $lookup:
//      {
//        from: "userCompany",
//        localField: "sender",
//        foreignField: "user",
//        as: "senderInfo"
//      }

// }

// ], function (err, data) {
//       if (err) {
//         console.log(err);

//       }
//       //console.log(data[0].senderInfo);
//       //res.send( data)

//       res.send(data)
//       console.log("hello mar7aba", data)
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

exports.postCampaign = function(req, res){

  console.log(req.body);

  var campaignName = req.body.campaignName;
  var campaignDescription = req.body.campaignDescription;
  var campaignAmount = req.body.campaignAmount;

  db.companyCampaigns.findOne({username:req.session.user},function(err,data){
    if(err){
      throw err;
    } else {
      var info = new db.companyCampaigns({
        campaignName:campaignName,
        campaignDescription:campaignDescription,
        campaignAmount:campaignAmount,
        username:req.session.user
      })
      info.save(function(err,information){
        if(err){
          throw err;
        } else {
          console.log(information);
          res.send(information);
        }
      })
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
    console.log("hello data", data)
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
