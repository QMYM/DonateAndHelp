 var assert = require('chai').assert
 var handler = require('../server/handler')
 var server = require('../server/index')
 var db = require('../db/index')
var chai = require('chai');  
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style
var should = chai.should();
  var chai = require('chai')
  , chaiHttp = require('chai-http');
 
 chai.use(chaiHttp);

describe('/searchBeneficiary', function () {
      it('it should sendStatus(404)if there is somthing wrong okay!', function(done){
        chai.request(server)
           .post('/searchBeneficiary')
            .end(function(err,res) {
                res.should.have.status(404);
               
              done();
            });
      });
  });



describe('/uploadImageDonor', function () {
      it('it should sendStatus(404)if there is somthing wrong okay!', function(done){
        chai.request(server)
           .post('/uploadImageDonor')
            .end(function(err,res) {
                res.should.have.status(404);
               
              done();
            });
      });
  });

describe('/addProfileDonor', function () {
      it('it should sendStatus(404)if there is somthing wrong okay!', function(done){
        chai.request(server)
           .post('/addProfileDonor')
            .end(function(err,res) {
                res.should.have.status(404);
               
              done();
            });
      });
  });



describe('/postCampaign', function () {
      it('it should sendStatus(404)if there is somthing wrong okay!', function(done){
        chai.request(server)
           .post('/postCampaign')
            .end(function(err,res) {
                res.should.have.status(404);
               
              done();
            });
      });
  });


describe('/uploadImageCampaign', function () {
      it('it should sendStatus(404)if there is somthing wrong okay!', function(done){
        chai.request(server)
           .post('/uploadImageCampaign')
            .end(function(err,res) {
                res.should.have.status(404);
               
              done();
            });
      });
  });



describe('/addProfileCompany', function () {
      it('it should sendStatus(404)if there is somthing wrong okay!', function(done){
        chai.request(server)
           .post('/addProfileCompany')
            .end(function(err,res) {
                res.should.have.status(404);
               
              done();
            });
      });
  });

describe('/uploadImage', function () {
      it('it should sendStatus(404)if there is somthing wrong okay!', function(done){
        chai.request(server)
           .post('/uploadImage')
            .end(function(err,res) {
                res.should.have.status(404);
               
              done();
            });
      });
  });



describe('/SignupCompany', function () {
      it('it should sendStatus(404)if there is somthing wrong okay!', function(done){
        chai.request(server)
           .post('/SignupCompany')
            .end(function(err,res) {
                res.should.have.status(404);
               
              done();
            });
      });
  });

 describe('/Signup', function () {
      it('it should sendStatus(404)if there is somthing wrong okay!', function(done){
        chai.request(server)
           .post('/Signup')
            .end(function(err,res) {
                res.should.have.status(404);
               
              done();
            });
      });
  });

 describe('/LoginCompany', function () {
      it('it should sendStatus(404)if there is somthing wrong okay!', function(done){
        chai.request(server)
           .post('/LoginCompany')
            .end(function(err,res) {
                res.should.have.status(404);
               
              done();
            });
      });
  });

  describe('/LoginDonater', function () {
      it('it should sendStatus(404)if there is somthing wrong okay!', function(done){
        chai.request(server)
           .post('/LoginDonater')
            .end(function(err,res) {
                res.should.have.status(404);
               
              done();
            });
      });
  });
  describe('/sessionName', function () {
      it('it should GET all the sessionNames', function(done){
        chai.request(server)
           .get('/sessionName')
            .end(function(err,res) {
                res.should.have.status(200);
               
              done();
            });
      });
  });

   describe('/getImage', function () {
      it('it should GET all the getImage', function(done){
        chai.request(server)
           .get('/getImage')
            .end(function(err,res) {
                res.should.have.status(200);
               
              done();
            });
      });
  });
describe('/logout', function () {
      it('it should GET all the logout', function(done){
        chai.request(server)
           .get('/logout')
            .end(function(err,res) {
                res.should.have.status(200);
               
              done();
            });
      });
  });

describe('/reciveMessag', function () {
      it('it should GET all the reciveMessag', function(done){
        chai.request(server)
           .get('/reciveMessag')
            .end(function(err,res) {
                res.should.have.status(200);
               
              done();
            });
      });
  });

describe('/getImageDonor', function () {
      it('it should GET all the getImageDonor', function(done){
        chai.request(server)
           .get('/getImageDonor')
            .end(function(err,res) {
                res.should.have.status(200);
               
              done();
            });
      });
  });

describe('/fetchDonorData', function () {
      it('it should GET all the fetchDonorData', function(done){
        chai.request(server)
           .get('/fetchDonorData')
            .end(function(err,res) {
                res.should.have.status(200);
               
              done();
            });
      });
  });
describe('/fetchCompanyData', function () {
      it('it should GET all the fetchCompanyData', function(done){
        chai.request(server)
           .get('/fetchCompanyData')
            .end(function(err,res) {
                res.should.have.status(200);
               
              done();
            });
      });
  });

describe('/imageSearch', function () {
      it('it should GET all the imageSearch', function(done){
        chai.request(server)
           .get('/imageSearch')
            .end(function(err,res) {
                res.should.have.status(200);
               
              done();
            });
      });
  });
describe('/donorCam', function () {
      it('it should GET all the donorCam', function(done){
        chai.request(server)
           .get('/donorCam')
            .end(function(err,res) {
                res.should.have.status(200);
               
              done();
            });
      });
  });

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





