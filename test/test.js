var assert = require('chai').assert
var handler = require('../server/handler')
var db = require('../db/index')




describe('userCompany', function () {
  describe('#save()', function () {
    it('should save without error', function (done) {
      var user = new db.userCompany({id:"id"})
      user.save(function (err) {
        if (err) done(err)
        else done()
      })
    })
  })
})

describe('userCompany', function () {
  describe('#delete()', function () {
    it('should delete without error', function (done) {

      db.userCompany.deleteOne({id:"id"},function (err) {
        if (err) done(err)
        else done()
      })
    })
  })
})

describe('userDonater', function () {
  describe('#save()', function () {
    it('should save without error', function (done) {
      var user = new db.userDonater({id:"id"})
      user.save(function (err) {
        if (err) done(err)
        else done()
      })
    })
  })
})

describe('userDonater', function () {
  describe('#delete()', function () {
    it('should delete without error', function (done) {
      
      db.userDonater.deleteOne({id:"id"},function (err) {
        if (err) done(err)
        else done()
      })
    })
  })
})



describe('MessageSchema', function () {
  describe('#save()', function () {
    it('should save without error', function (done) {
      var user = new db.MessageSchema({ sender: 'anyname', reciver: 'anyname', message: 'anytext' })
      user.save(function (err) {
        if (err) done(err)
        else done()
      })
    })
  })
})

describe('MessageSchema', function () {
  describe('#delete()', function () {
    it('should delete without error', function (done) {
      
      db.MessageSchema.deleteOne({id:"id"},function (err) {
        if (err) done(err)
        else done()
      })
    })
  })
})



describe('companyCampaigns', function () {
  describe('#save()', function () {
    it('should save without error', function (done) {
      var user = new db.companyCampaigns({id:"id"})
      user.save(function (err) {
        if (err) done(err)
        else done()
      })
    })
  })
})

describe('companyCampaigns', function () {
  describe('#delete()', function () {
    it('should delete without error', function (done) {
      
      db.companyCampaigns.deleteOne({id:"id"},function (err) {
        if (err) done(err)
        else done()
      })
    })
  })
})

