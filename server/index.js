let express = require('express')
let session = require('express-session')
let bodyParser = require('body-parser')
let handler = require('./handler')
var path = require('path')
var ObjectId = require('mongodb').ObjectID
const app = express()

app.use(express.static(path.join(__dirname, '../react-client/dist')))
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
app.use(session({
  secret: 'very very secret',
  resave: true,
  saveUninitialized: true
}))

app.get('/getImage',handler.getImage)
app.post('/loginCompany', handler.LoginCompany)
app.post('/loginDonater', handler.LoginDonater) 
app.post('/Donater', handler.Signup)
app.post('/Company', handler.SignupCompany)
app.post('/photo', handler.uploadImage)
app.get('/logout', handler.logout)
app.post('/profile_company',handler.addProfileCompany)
app.get('/recieveMessage', handler.reciveMessag)
app.post('/imageCampaign', handler.uploadImageCampaign)
app.post('/Donorcampaign', handler.postDonorCampaign)
app.post('/companycampaign', handler.postCompanyCampaign)
app.post('/sendMessage' , handler.sendMessage)
app.post('/Profile_Donor',handler.addProfileDonor)
app.post('/photoDonor', handler.uploadImageDonor)
app.get('/getImageDonor',handler.getImageDonor)
app.get("/sessionName",handler.sessionName)
// app.get('/getPhotoForMessages', handler.getPhotoForMessages)
app.get("/fetchDonorData", handler.fetchDonorData)
app.get("/fetchCompanyData", handler.fetchCompanyData)
app.get('/imageSearch', handler.imageSearch)
app.post("/search_beneficiary", handler.searchBeneficiary)
app.get('/donorCam' , handler.donorCam)
app.get('/imageSearchDonor', handler.imageSearchDonor)
app.post("/search_donor", handler.searchDonor)
app.post('/removeMsg', handler.removeMsg)





app.get('/*' , (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, '../react-client/dist/index.html')))
})

const PORT = process.env.PORT || 3000

// var server =app.listen(PORT, () => {
//   console.log(`The Port : ${PORT}`)
// })
app.listen(PORT, () => {
  console.log(`The Port : ${PORT}`)
})
// module.exports = server