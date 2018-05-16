var assert = require('chai').assert
 var handler = require('../server/handler')
 var server = require('../server/index')
 var db = require('../db/index')
var chai = require('chai');  
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style
var should = chai.should();




   chaiHttp = require('chai-http');
 
 chai.use(chaiHttp);




describe('getImage', function(){
  it('should be exist', function(){
    should.exist(handler.getImage);
  });
})






describe('deleteAllMessages', function () {
  it('it should sendStatus(201) to the client', function (done) {
    chai.request(server)
      .post('/deleteAllMessages')
      .end(function (err, res) {
        res.should.have.status(201)

        done()
      })
  })
})


describe('removeMsg', function () {
  it('it should sendStatus(201) to the client', function (done) {
    chai.request(server)
      .post('/removeMsg')
      .end(function (err, res) {
        res.should.have.status(201)

        done()
      })
  })
})

describe('removeCampaignDonor', function () {
  it('it should sendStatus(200) to the client', function (done) {
    chai.request(server)
      .post('/delCampaignDonor')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})


describe('editCampaignDonor', function () {
  it('it should sendStatus(200) to the client', function (done) {
    chai.request(server)
      .put('/editCampaignDonor')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})

describe('editCampaignComp', function () {
  it('it should sendStatus(200) to the client', function (done) {
    chai.request(server)
      .put('/editCampaignComp')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})


describe('removeCampaignComp', function () {
  it('it should sendStatus(200) to the client', function (done) {
    chai.request(server)
      .post('/delCampaignComp')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})

describe('searchDonor', function () {
  it('it should sendStatus(200) if it sending the data to the client', function (done) {
    chai.request(server)
      .post('/search_donor')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})

describe('searchBeneficiary', function () {
  it('it should sendStatus(200) if it sending the data to the client', function (done) {
    chai.request(server)
      .post('/search_beneficiary')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})

describe('uploadImageDonor2', function () {
  it('it should sendStatus(200) if it sending the data to the client', function (done) {
    chai.request(server)
      .post('/photoDonor2')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})


describe('uploadImageDonor', function () {
  it('it should sendStatus(200) if it sending the data to the client', function (done) {
    chai.request(server)
      .post('/photoDonor')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})

describe('addProfileDonor', function () {
  it('it should sendStatus(200) if it sending the data to the client', function (done) {
    chai.request(server)
      .post('/Profile_Donor')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})

describe('/postCampaign', function () {
  it('it should sendStatus(404)if there is somthing wrong okay!', function (done) {
    chai.request(server)
      .post('/campaignInfo')
      .end(function (err, res) {
        res.should.have.status(404)

        done()
      })
  })
})

describe('/postCompanyCampaign', function () {
  it('it should sendStatus(201) if it sending the data to the client', function (done) {
    chai.request(server)
      .post('/companycampaign')
      .end(function (err, res) {
        res.should.have.status(201)

        done()
      })
  })
})

describe('/postDonorCampaign', function () {
  it('it should sendStatus(201) if it sending the data to the client', function (done) {
    chai.request(server)
      .post('/Donorcampaign')
      .end(function (err, res) {
        res.should.have.status(201)

        done()
      })
  })
})



describe('/uploadImageCampaign', function () {
  it('it should sendStatus(200) if it sending the data to the client', function (done) {
    chai.request(server)
      .post('/imageCampaign')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})

describe('/addProfileCompany', function () {
  it('it should sendStatus(200) if it sending the data to the client', function (done) {
    chai.request(server)
      .post('/profile_company')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})

describe('/uploadImage', function () {
  it('it should sendStatus(200) if it sending the data to the client', function (done) {
    chai.request(server)
      .post('/photo')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})

describe('SignupCompany', function () {
  it('it should sendStatus(404)if there is somthing wrong okay!', function (done) {
    chai.request(server)
      .post('/Company')
      .end(function (err, res) {
        res.should.have.status(404)

        done()
      })
  })
})

describe('Signup', function () {
  it('it should sendStatus(404)if there is somthing wrong okay!', function (done) {
    chai.request(server)
      .post('/Donater')
      .end(function (err, res) {
        res.should.have.status(404)

        done()
      })
  })
})

describe('uploadImage2', function () {
  it('it should sendStatus(201) to the client', function (done) {
    chai.request(server)
      .post('/photo2')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})

describe('LoginCompany', function () {
  it('it should sendStatus(404)if there is somthing wrong okay!', function (done) {
    chai.request(server)
      .post('/LoginCompany')
      .end(function (err, res) {
        res.should.have.status(404)

        done()
      })
  })
})

describe('LoginDonater', function () {
  it('it should sendStatus(404)if there is somthing wrong okay!', function (done) {
    chai.request(server)
      .post('/LoginDonater')
      .end(function (err, res) {
        res.should.have.status(404)

        done()
      })
  })
})
describe('sessionName', function () {
  it('it should GET all the sessionNames', function (done) {
    chai.request(server)
      .get('/sessionName')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})

describe('getPhotoForMessages', function () {
  it('it should GET all the sessionNames', function (done) {
    chai.request(server)
      .get('/getPhotoForMessages')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})


describe('getImage', function () {
  it('it should GET all the getImage', function (done) {
    chai.request(server)
      .get('/getImage')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})

describe('getImage2', function () {
  it('it should GET all the getImage', function (done) {
    chai.request(server)
      .get('/getImage2')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})

describe('logout', function () {
  it('it should GET all the logout', function (done) {
    chai.request(server)
      .get('/logout')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})

describe('reciveMessag', function () {
  it('it should GET all the reciveMessag', function (done) {
    chai.request(server)
      .get('/reciveMessag')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})

describe('getImageDonor', function () {
  it('it should GET all the getImageDonor', function (done) {
    chai.request(server)
      .get('/getImageDonor')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})


describe('getImageDonor2', function () {
  it('it should GET all the getImageDonor', function (done) {
    chai.request(server)
      .get('/getImageDonor2')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})

describe('fetchDonorData', function () {
  it('it should fetching the data from the userDonater schema', function (done) {
    chai.request(server)
      .get('/fetchDonorData')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})
describe('fetchCompanyData', function () {
  it('it should fetching the data from the userCompany schema', function (done) {
    chai.request(server)
      .get('/fetchCompanyData')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})

describe('imageSearch', function () {
  it('it should GET the image for a specefic user', function (done) {
    chai.request(server)
      .get('/imageSearch')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})
describe('imageSearchDonor', function () {
  it('it should GET the image for a specefic user from doantorSchema', function (done) {
    chai.request(server)
      .get('/imageSearchDonor')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})
describe('recieveMessage', function () {
  it('it should GET all the Messages', function (done) {
    chai.request(server)
      .get('/donorCam')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})

describe('recieveMessage', function () {
  it('it should GET all the Messages', function (done) {
    chai.request(server)
      .get('/recieveMessage')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})



describe('donorCam', function () {
  it('it should GET all the Campaigns in companyCampaigns schema', function (done) {
    chai.request(server)
      .get('/donorCam')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})

describe('companyCam', function () {
  it('it should GET all the Campaigns in donerCampaigns schema', function (done) {
    chai.request(server)
      .get('/companyCam')
      .end(function (err, res) {
        res.should.have.status(200)

        done()
      })
  })
})



describe('userCompany', function () {
  describe('#delete()', function () {
    it('should delete without error', function (done) {
      db.userCompany.deleteOne({id: 'id'}, function (err) {
        if (err) done(err)
        else done()
      })
    })
  })
})

describe('userDonater', function () {
  describe('#delete()', function () {
    it('should delete without error', function (done) {
      db.userDonater.deleteOne({id: 'id'}, function (err) {
        if (err) done(err)
        else done()
      })
    })
  })
})

describe('MessageSchema', function () {
  describe('#delete()', function () {
    it('should delete without error', function (done) {
      db.MessageSchema.deleteOne({id: 'id'}, function (err) {
        if (err) done(err)
        else done()
      })
    })
  })
})

describe('companyCampaigns', function () {
  describe('#delete()', function () {
    it('should delete without error', function (done) {
      db.companyCampaigns.deleteOne({id: 'id'}, function (err) {
        if (err) done(err)
        else done()
      })
    })
  })
})
