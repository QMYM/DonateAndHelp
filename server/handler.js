let db = require('../db/index')
let helper = require('../helper/uitilty')
let bcrypt = require('bcrypt')
let saltRounds = 10

exports.Signup = function (req, res) {
  console.log('data is here', req.body)
  var username = req.body.username
  var password = req.body.password
  var email = req.body.email
  db.Users.find({ // searching for the username in the schema
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
            var user = new db.Users({
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
exports.userType = function (req,res){
  console.log('qays tard', req.body)
  res.sendStatus(201)
}

exports.Login = function (req, res) {
  var username = req.body.userName
  var password = req.body.password
  db.Users.findOne({ // searching for the username in the schema
    username: username
  }, function (err, data) {
    console.log('mais is here', data)
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
