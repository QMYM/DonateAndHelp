let express = require('express')
let session = require('express-session')
let bodyParser = require('body-parser')
let handler = require('./handler')
var path = require('path')
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
app.get('/getImage2',handler.getImage2)
app.post('/loginCompany', handler.LoginCompany)
app.post('/loginDonater', handler.LoginDonater) 
app.post('/Donater', handler.Signup)
app.post('/Company', handler.SignupCompany)
app.post('/photo', handler.uploadImage)
app.post('/photo2', handler.uploadImage2)
app.get('/logout', handler.logout)
app.post('/profile_company',handler.addProfileCompany)
app.get('/recieveMessage', handler.reciveMessag)
app.post('/imageCampaign', handler.uploadImageCampaign)
app.post('/Donorcampaign', handler.postDonorCampaign)
app.post('/companycampaign', handler.postCompanyCampaign)
app.post('/sendMessage' , handler.sendMessage)
app.post('/Profile_Donor',handler.addProfileDonor)
app.post('/photoDonor', handler.uploadImageDonor)
app.post('/photoDonor2', handler.uploadImageDonor2)
app.get('/getImageDonor',handler.getImageDonor)
app.get('/getImageDonor2',handler.getImageDonor2)
app.get("/sessionName",handler.sessionName)
app.get('/getPhotoForMessages', handler.getPhotoForMessages)
app.get("/fetchDonorData", handler.fetchDonorData)
app.get("/fetchCompanyData", handler.fetchCompanyData)
app.get('/imageSearch', handler.imageSearch)
app.post("/search_beneficiary", handler.searchBeneficiary)
app.get('/donorCam' , handler.donorCam)
app.get('/companyCam' , handler.companyCam)
app.get('/imageSearchDonor', handler.imageSearchDonor)
app.post("/search_donor", handler.searchDonor)
app.post('/removeMsg', handler.removeMsg)
app.post('/delCampaignDonor', handler.removeCampaignDonor)
app.post('/delCampaignComp', handler.removeCampaignComp)
app.put('/editCampaignDonor', handler.editCampaignDonor)
app.put('/editCampaignComp', handler.editCampaignComp)



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

