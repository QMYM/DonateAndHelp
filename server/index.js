const express = require('express');
const session = require('express-session'); 
const bodyParser = require('body-parser');
const path = require('path'); 
const handler = require('./handler');
const app = express(); 
app.use(express.static(path.join(__dirname, '../react-client/dist')));

// limit the request body coming
app.use(bodyParser.json({limit: '50mb'})); 
app.use(bodyParser.urlencoded({limit: '50mb', extended: true})); 
app.use(session({
    secret: 'very very secret', 
    resave: true, 
    saveUninitialized: true
})); 

// all the http methods, and the handler functions in the handler file.
app.post('/serveiceSmsMais', handler.serveiceSmsMais);
app.post('/serveiceSms', handler.serveiceSms);
app.post('/serveiceSmsDuraidi', handler.serveiceSmsDuraidi);
app.post('/serveiceSmsYussur', handler.serveiceSmsYussur);
app.get('/getInfoForProfilePageforDonor', handler.getInfoForProfilePageforDonor);
app.get('/getInfoForProfilePage', handler.getInfoForProfilePage); 
app.get('/getImage', handler.getImage);
app.get('/getImage2', handler.getImage2); 
app.post('/loginCompany', handler.LoginCompany); 
app.post('/loginDonater', handler.LoginDonater);
app.post('/Donater', handler.Signup); 
app.post('/Company', handler.SignupCompany); 
app.post('/photo', handler.uploadImage); 
app.post('/photo2', handler.uploadImage2); 
app.get('/logout', handler.logout); 
app.post('/profile_company', handler.addProfileCompany);
app.get('/recieveMessage', handler.reciveMessag);
app.post('/imageCampaign', handler.uploadImageCampaign);
app.post('/Donorcampaign', handler.postDonorCampaign); 
app.post('/companycampaign', handler.postCompanyCampaign);
app.post('/sendMessage', handler.sendMessage); 
app.post('/Profile_Donor', handler.addProfileDonor);
app.post('/photoDonor', handler.uploadImageDonor);
app.post('/photoDonor2', handler.uploadImageDonor2);
app.get('/getImageDonor', handler.getImageDonor); 
app.get('/getImageDonor2', handler.getImageDonor2);
app.get('/sessionName', handler.sessionName); 
app.get('/getPhotoForMessages', handler.getPhotoForMessages);
app.get('/fetchDonorData', handler.fetchDonorData); 
app.get('/fetchCompanyData', handler.fetchCompanyData);
app.get('/imageSearch', handler.imageSearch);
app.post('/search_beneficiary', handler.searchBeneficiary);
app.get('/donorCam', handler.donorCam);
app.get('/companyCam', handler.companyCam); 
app.get('/imageSearchDonor', handler.imageSearchDonor);
app.post('/search_donor', handler.searchDonor);
app.post('/removeMsg', handler.removeMsg);
app.post('/delCampaignDonor', handler.removeCampaignDonor); 
app.post('/delCampaignComp', handler.removeCampaignComp);
app.put('/editCampaignDonor', handler.editCampaignDonor); 
app.put('/editCampaignComp', handler.editCampaignComp); 
app.post('/deleteAllMessages', handler.deleteAllMessages);
app.post('/editAmount', handler.editAmount);
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, '../react-client/dist/index.html')))
  });
  

const PORT = process.env.PORT || 3000; 

if (!module.parent) {
    app.listen(PORT, () => {
        console.log(`The Port : ${PORT}`);
    });
}

module.exports = app;
