var assert = require('assert')
<<<<<<< HEAD
let db = require('../db/index')

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1)
    })
  })
})

describe('Users', function () {
  describe('#save()', function () {
    it('should save without error', function (done) {
      var user = new db.Users({ username: 'anyname', email: 'anyemail', password: '123' })
      user.save(function (err) {
        if (err) done(err)
        else done()
      })
=======
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1)
    })
  })
})

describe('User', function () {
  describe('#save()', function () {
    it('should save without error', function (done) {
      var user = new User('Luna')
      user.save(done)
>>>>>>> d66c23d80bb7dfe344eb823a4fdbb1d25ee3eff6
    })
  })
})
