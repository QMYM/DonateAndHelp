let db = require('../db/index')
let helper = require('../helper/uitilty')
let bcrypt = require('bcrypt')

exports.Signup = function (req, res) {
  db.userSave(req.body, function (err, data) {
    if (err) {
      res.status(404).send(err)
    }
    res.status(200).send(data)
  })
}

exports.Login = function (req, res) {
  var username = req.body.userName
  var password = req.body.password
  db.Users.findOne({
    username: username
  }, function (err, data) {
    console.log('mais is here', data)
    if (err) {
      throw err
    } else {
      if (!data) {
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
