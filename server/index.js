
let express = require('express') // Import express application object
let session = require('express-session') // Import session middleware for Express server. When a client makes an HTTP 
// request, and that request doesn't contain a session cookie, a new session will be created by express-session
// Creating a new session: generate a unique session id, store that session id in a session cookie,
// create an empty session object as req.session
let bodyParser = require('body-parser')
const Nexmo = require('nexmo');

 // Body-Parser is a library that you can use as middleware when handling
// Express Node.js GET and POST requests
var path = require('path') // Node.js Express path module is used for handling and transforming file paths
let handler = require('./handler') // Import handler.js file located in the server directory
const app = express() // Using express application
app.use(express.static(path.join(__dirname, '../react-client/dist'))) // Serving client static file in express server
app.use(bodyParser.json({limit: '50mb'})) // This is to parse application/json and limit the request body coming
// from the client to 50mb
app.use(bodyParser.urlencoded({limit: '50mb', extended: true})) // This is to parse application/x-www-form-urlencoded
// and limit the request coming from the client body to 50mb
app.use(session({
  secret: 'very very secret', // This is used to sign the session ID cookie. only the first element will be used 
  // to sign the session ID cookie, while all the elements will be considered when verifying the signature in 
  // requests
  resave: true, // It forces the session to be saved back to the session store
  saveUninitialized: true // If its true, the session object will be stored in the session store
})) 
const nexmo = new Nexmo({
  apiKey: '838662f6',
  apiSecret: 'g85V0tSPQDaC4O3N'
});

const Duraidi = new Nexmo({
  apiKey: '17a02e40',
  apiSecret: 'gIYjQnO6z6LI6guT'
});

app.post('/serveiceSms', handler.serveiceSms);
app.post('/serveiceSmsDuraidi', handler.serveiceSmsDuraidi)

app.get("/getInfoForProfilePageforDonor", handler.getInfoForProfilePageforDonor) // This function will retrieve donor 
// profile information for the donor profile page
app.get("/getInfoForProfilePage", handler.getInfoForProfilePage) // This function will retrieve beneficiary profile 
// information for the beneficiary profile page
app.get('/getImage', handler.getImage) // This function will retrieve the profile image of the beneficiary in the
// profile page
app.get('/getImage2', handler.getImage2) // This function will retrieve the background image of the beneficiary 
//in the profile page
app.post('/loginCompany', handler.LoginCompany) // This function is responsible for the login of the beneficiary
app.post('/loginDonater', handler.LoginDonater) // This function is responsible for the login of the donor
app.post('/Donater', handler.Signup) // This function is responsible for the signup of the donor
app.post('/Company', handler.SignupCompany) // This function is responsible for the signup of the beneficiary
app.post('/photo', handler.uploadImage) // This function will upload the profile image of the beneficiary in the
// profile page
app.post('/photo2', handler.uploadImage2) // This function will upload the background image of the beneficiary in the
// profile page
app.get('/logout', handler.logout) // This function for the Logout of the existing and currently logged in user
app.post('/profile_company', handler.addProfileCompany) // This function is for adding/editing the beneficiary 
// profile information in the profile page
app.get('/recieveMessage', handler.reciveMessag) // This function is responsible for recieving messages
app.post('/imageCampaign', handler.uploadImageCampaign) // This function is to upload image campaigns in the 
// beneficiary campaign page
app.post('/Donorcampaign', handler.postDonorCampaign) // This function is to add campaign information in the donor
// campaign page
app.post('/companycampaign', handler.postCompanyCampaign) // This function is to add campaign information in 
// the beneficiary campaign page
app.post('/sendMessage', handler.sendMessage) // This function is responsible for sending messages
app.post('/Profile_Donor', handler.addProfileDonor) // This function is responsible for adding donor profile 
// information in the donor profile page
app.post('/photoDonor', handler.uploadImageDonor) // This function is for uploading the profile image of the donor
// in the donor profile page
app.post('/photoDonor2', handler.uploadImageDonor2) // This function is for uploading the background image of the 
// donor in the donor profile page
app.get('/getImageDonor', handler.getImageDonor) // This function is for retrieving the profile image of the donor
// in the donor profile page
app.get('/getImageDonor2', handler.getImageDonor2) // This function is for retrieving the background image of the
// donor in the donor profile page
app.get('/sessionName', handler.sessionName) // This function is for retrieving the session name
app.get('/getPhotoForMessages', handler.getPhotoForMessages) // This function is for retrieving the user image
// in the message page
app.get('/fetchDonorData', handler.fetchDonorData) // This function is retrieve some information of the donor
// in the profile page
app.get('/fetchCompanyData', handler.fetchCompanyData) // This function is retrieve some information of the 
// beneficiary in the profile page
app.get('/imageSearch', handler.imageSearch) // This function is to retrieve the image of the donor for the
// beneficiary search function
app.post('/search_beneficiary', handler.searchBeneficiary) // This function is to retrieve the donor 
// information for the beneficiary search function
app.get('/donorCam', handler.donorCam) // This function is to retrieve the donor campaigns in the donor profile page
app.get('/companyCam', handler.companyCam) // This function is to retrieve the beneficiary campaigns in the 
//beneficiary profile page
app.get('/imageSearchDonor', handler.imageSearchDonor) // This function is to retrieve the image of the beneficiary 
// for the donor search function
app.post('/search_donor', handler.searchDonor) // This function is to retrieve the beneficiary information
// for the donor search function 
app.post('/removeMsg', handler.removeMsg) 
app.post('/delCampaignDonor', handler.removeCampaignDonor) // This function is to delete donor campaigns in the
// donor profile page
app.post('/delCampaignComp', handler.removeCampaignComp) // This function is to delete beneficiary campaigns in the
// beneficiary profile page
app.put('/editCampaignDonor', handler.editCampaignDonor) // This function is to edit donor campaign infomration
// in the donor profile page 
app.put('/editCampaignComp', handler.editCampaignComp) // This function is to edit beneficiary campaign infomration
// in the beneficiary profile page 
app.post('/deleteAllMessages', handler.deleteAllMessages)
app.post('/editAmount' , handler.editAmount) // This function will deduct the amounts donated by donors from the
// the total amount requested by the beneficiary in the campaign
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, '../react-client/dist/index.html')))
}) // This is the defualt render for the frontend client pages from the backend side

const PORT = process.env.PORT || 3000 // This is to set the environment variable PORT to tell the web server
// what port to listen on

if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`The Port : ${PORT}`) // Express Node.js server is listening on this port
  })
}

module.exports = app
