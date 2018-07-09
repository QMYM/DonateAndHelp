
const db = require('../db/index');
const helper = require('../helper/uitilty');
const bcrypt = require('bcrypt'); 
const saltRounds = 10; 
const Nexmo = require('nexmo');

// hashing the password and create session for the user
// and saving the informtion in the donor schema 
exports.Signup = function (req, res) { 
    let username = req.body.username; 
    let password = req.body.password; 
    let email = req.body.email; 
    db.userDonater.find({ 
        username: username
    }, function (err, data) {
        if (err) {
            res.sendStatus(404); 
        } else {
            if (data.length > 0) { 
                res.sendStatus(404);
            } else {
                bcrypt.genSalt(saltRounds, function (err, salt) { 
                    if (err) {
                        throw err;
                    } 
                    bcrypt.hash(password, salt, function (err, hash) { 
                        if (err) {
                            throw err;
                        } 
                        let user = new db.userDonater({
                            username: username,
                            email: email,
                            password: hash
                        }); 
                        user.save(function (err, data) {
                            if (err) {
                                throw err;
                            } 
                            helper.createSession(req, res, data.username); 
                        });
                    });
                });
            }
        }
    });
};

// hashing the password and create session for the user
// and saving the informtion in the company schema 
exports.SignupCompany = function (req, res) { 
    let username = req.body.username;
    let password = req.body.password; 
    let email = req.body.email; 
    db.userCompany.find({
        username: username
    }, function (err, data) {
        if (err) {
            res.sendStatus(404); 
            if (data.length > 0) { 
                res.sendStatus(404);
            } else {
                bcrypt.genSalt(saltRounds, function (err, salt) { 
                    if (err) {
                        throw err;
                    }
                    bcrypt.hash(password, salt, function (err, hash) { 
                        if (err) {
                            throw err;
                        } 
                        let user = new db.userCompany({
                            username: username,
                            email: email,
                            password: hash
                        }); 
                        user.save(function (err, data) { 
                            if (err) {
                                throw err;
                            }
                            helper.createSession(req, res, data.username);
                        });
                    });
                });
            }
        }
    });
};

exports.logout = function (req, res) { 
    req.session.destroy(function () { 
        res.sendStatus(200);
    });
};

//compare the password and adding session for the user
//and checking if the user exist
exports.LoginCompany = function (req, res) { 
    let username = req.body.userName;
    let password = req.body.password;
    db.userCompany.findOne({ 
        username: username
    }, function (err, data) {
        if (err) {
            throw err; 
        } else {
            if (!data) { // if the user does not exist
                res.sendStatus(404);
            } else {
                bcrypt.compare(password, data.password, function (found) { 
                    if (found) {
                        helper.createSession(req, res, data.username); 
                    } else {
                        res.sendStatus(404); 
                    }
                });
            }
        }
    });
};


exports.uploadImage = function (req, res) { 
    let image = req.body.image; 
    let save = new db.userCompany({
        image: image 
    });
    save.save(function (err, data) { 
        if (err) {
            throw err; 
        } else {
            console.log('saved!'); 
        }
    });
    db.userCompany.update({username: req.session.user}, { $set: { image: image }}, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.send(data);
        }
    });
};

// add a personal photo for the user
exports.uploadImage2 = function (req, res) { 
    let image2 = req.body.image2;
    let save = new db.userCompany({
        image2: image2
    });
    save.save(function (err) {
        if (err) {
            throw err;
        } else {
            console.log('saved!');
        }
    });
    db.userCompany.update({username: req.session.user}, { $set: { image2: image2 }}, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.send(data);
        }
    });
};

exports.getImage = function (req, res) {
    db.userCompany.findOne({username: req.session.user}, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.send(data);
        }
    });
};

exports.getImage2 = function (req, res) {
    db.userCompany.findOne({username: req.session.user}, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.send(data);
        }
    });
};

//compare the password and adding session for the user
//and checking if the user exist
exports.LoginDonater = function (req, res) {
    let username = req.body.userName;
    let password = req.body.password;
    db.userDonater.findOne({ 
        username: username
    }, function (err, data) {
        if (err) {
            throw err;
        } else {
            if (!data) { // if the user does not exist
                res.sendStatus(404);
            } else {
                bcrypt.compare(password, data.password, function (found) {
                    if (found) {
                        helper.createSession(req, res, data.username);
                    } else {
                        res.sendStatus(404);
                    }
                });
            }
        }
    });
};

exports.getInfoForProfilePage = function (req, res) {
    db.userCompany.find({username: req.session.user}, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.send(data);
        }
    });
};

exports.getInfoForProfilePageforDonor = function (req, res) {
    db.userDonater.find({username: req.session.user}, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.send(data);
        }
    });
};

exports.addProfileCompany = function (req, res) {
    console.log('hi phone ', req.body);
    let contactNum = req.body.contactNum;
    let description = req.body.description;
    let address = req.body.address;

    db.userCompany.findOneAndUpdate({username: req.session.user}, {$set: {contactNum: contactNum, description: description, address: address}}, function (err) {
        if (err) {
            throw err;
        } else {
            let info = new db.userCompany({
                contactNum: contactNum,
                description: description,
                address: address
            });
            info.save(function (err, information) {
                if (err) {
                    throw err;
                } else {
                    res.send(information);
                }
            });
        }
    });
};

exports.addProfileDonor = function (req, res) {
    let name = req.body.name;
    let contactNum = req.body.contactNum;
    let description = req.body.description;
    let address = req.body.address;
    db.userDonater.findOneAndUpdate({username: req.session.user}, {$set: {name: name, contactNum: contactNum, description: description, address: address}}, function (err) {
        if (err) {
            throw err;
        } else {
            let info = new db.userDonater({
                name: name,
                contactNum: contactNum,
                description: description,
                address: address
            });
            info.save(function (err, information) {
                if (err) {
                    throw err;
                } else {
                    res.send(information);
                }
            });
        }
    });
};

// add a personal photo for the user
exports.uploadImageDonor = function (req, res) { 
    let image = req.body.image;
    let save = new db.userDonater({
        image: image
    });
    save.save(function (err, data) {
        if (err) {
            throw err;
        } else {
            console.log('here\'s the data', data);
        }
    });
    db.userDonater.update({username: req.session.user}, { $set: { image: image }}, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.send(data);
        }
    });
};

// add a personal photo for the user
exports.uploadImageDonor2 = function (req, res) { 
    let image2 = req.body.image2;
    let save = new db.userDonater({
        image2: image2
    });
    save.save(function (err, data) {
        if (err) {
            throw err;
        } else {
            console.log('here\'s the data', data);
        }
    });
    db.userDonater.update({username: req.session.user}, { $set: { image2: image2 }}, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.send(data);
        }
    });
};

exports.getImageDonor = function (req, res) {
    db.userDonater.findOne({username: req.session.user}, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.send(data);
        }
    });
};

exports.getImageDonor2 = function (req, res) {
    db.userDonater.findOne({username: req.session.user}, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.send(data);
        }
    });
};

exports.sendMessage = function (req, res) {
    let reciever = req.body.user;
    let text = req.body.text;
    db.userCompany.findOne({username: reciever}, function (err, data) {
        if (err) {
            throw err;
        } else {
            if (data) {
                let message = new db.MessageSchema({
                    sender: req.session.user,
                    reciver: reciever,
                    message: text
                });
                message.save(function (err, data) {
                    if (err) {
                        throw err;
                    } else {
                        res.send(data);
                    }
                });
            } else {
                db.userDonater.findOne({username: reciever}, function (err, data) {
                    if (err){ 
                        throw err;
                    }else {
                        if (!data) {
                            res.sendStatus(404);
                        } else {
                            let message = new db.MessageSchema({
                                sender: req.session.user,
                                reciver: reciever,
                                message: text
                            });

                            message.save(function (err, data) {
                                if (err) {
                                    throw err;
                                } else {
                                    res.send(data);
                                }
                            });
                        }
                    }
                });
            }
        }
    });
};

exports.getPhotoForMessages = function (req,res) {
    db.messageSenders(function (err, data) {
        if (err){
            throw err; 
        }else{
            res.send(data);
        }
    });
};

exports.reciveMessag = function (req,res) {
    db.MessageSchema.find({}, function (err, data) {
        if (err) {
            throw err; 
        }else{
            res.send(data);
        } 
    });
};

exports.uploadImageCampaign = function (req, res) {
    let image = req.body.campaignImage;
    let save = new db.companyCampaigns({
        campaignImage: image
    });
    save.save(function (err, data) {
        if (err) {
            throw err;
        } else {
            console.log('Campaign image has been posted', data);
        }
    });
    db.companyCampaigns.update({username: req.session.user}, { $set: { campaignImage: image }}, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.send(data);
        }
    });
};

exports.postCompanyCampaign = function (req, res) {
    let campaignName = req.body.campaignName;
    let campaignDescription = req.body.campaignDescription;
    let campaignAmount = req.body.campaignAmount;
    let campaignImage = req.body.campaignImage;
    let category = req.body.category;
    let info = new db.companyCampaigns({
        campaignName: campaignName,
        campaignDescription: campaignDescription,
        campaignAmount: campaignAmount,
        campaignImage: campaignImage,
        username: req.session.user,
        category: category
    });
    info.save(function (err) {
        if (err) {
            throw err;
        } else {
            res.sendStatus(201);
        }
    });
};

exports.postDonorCampaign = function (req, res) {
    let campaignName = req.body.campaignName;
    let campaignDescription = req.body.campaignDescription;
    let campaignAmount = req.body.campaignAmount;
    let campaignImage = req.body.campaignImage;
    let info = new db.donorCampaigns({
        campaignName: campaignName,
        campaignDescription: campaignDescription,
        campaignAmount: campaignAmount,
        campaignImage: campaignImage,
        username: req.session.user
    });
    info.save(function (err) {
        if (err) {
            throw err;
        } else {
            res.sendStatus(201);
        }
    });
};

//getting the user that he has session.
exports.sessionName = function (req, res) {
    res.send(req.session.user);
};

exports.searchBeneficiary = function (req, res) {
    let name = req.body.name;
    db.userDonater.findOne({username: name}, function (err, data) {
        if (err) {
            throw err;
        } else {
            if (!data) {
                res.sendStatus(404);
            } else {
                res.send(data);
            }
        }
    });
};

exports.imageSearch = function (req,res) {
    db.userDonater.find({}, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.send(data);
        }
    });
};

exports.donorCam = function (req,res) {
    db.donorCampaigns.find({}, function (err, data) {
        if (err) {
            throw err; 
        }else {
            res.send(data);
        }
    });
};

exports.companyCam = function (req,res) {
    db.companyCampaigns.find({}, function (err, data) {
        if (err) { throw err; } else {
            res.send(data);
        }
    });
};

exports.fetchDonorData = function (req, res) {
    db.userDonater.findOne({username: req.session.user}, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.send(data);
        }
    });
};

exports.fetchCompanyData = function (req, res) {
    db.userCompany.findOne({username: req.session.user}, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.send(data);
        }
    });
};

exports.searchDonor = function (req, res) {
    let name = req.body.name;
    db.userCompany.findOne({username: name}, function (err, data) {
        if (err) {
            throw err;
        } else if (!data) {
            res.sendStatus(404);
        } else {
            let arr = [];
            arr.push(data);
            res.send(arr);
        }
    });
};

exports.imageSearchDonor = function (req,res) {
    db.userCompany.find({}, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.send(data);
        }
    });
};

exports.removeMsg = function (req, res) {
    let Id = req.body.id;
    db.MessageSchema.remove({_id: Id}, function (err) {
        if (err) {
            throw err;
        } else {
            res.sendStatus(201);
        }
    });
};

exports.removeCampaignComp = function (req, res) {
    let ID = req.body.CampID;
    db.companyCampaigns.findOneAndRemove({_id: ID}, function (err) {
        if (err) {
            throw err;
        } else {
            res.sendStatus(200);
        }
    });
};

exports.editCampaignComp = function (req, res) {
    let campaignID = req.body.campaignID;
    let campaignName = req.body.campaignName;
    let campaignDescription = req.body.campaignDescription;
    let campaignAmount = req.body.campaignAmount;
    let username = req.body.username;
    db.companyCampaigns.update({_id: campaignID}, { $set: {
        campaignName: campaignName,
        campaignDescription: campaignDescription,
        campaignAmount: campaignAmount,
        username: username }}, function (error, data) {
        if (error) {
            throw error;
        } else {
            res.send(data);
        }
    });
};

exports.removeCampaignDonor = function (req, res) {
    let ID = req.body.CampID;
    db.donorCampaigns.findOneAndRemove({_id: ID}, function (err) {
        if (err) {
            throw err;
        } else {
            res.sendStatus(200);
        }
    });
};

exports.editCampaignDonor = function (req, res) {
    let campaignID = req.body.campaignID;
    let campaignName = req.body.campaignName;
    let campaignDescription = req.body.campaignDescr;
    let username = req.body.username;
    db.donorCampaigns.findOneAndUpdate({_id: campaignID}, {
        campaignName: campaignName,
        campaignDescription: campaignDescription,
        campaignAmount: campaignAmount,
        username: username
    }, function (error, data) {
        if (error) {
            throw error;
        } else {
            res.send(data);
        }
    });
};

exports.deleteAllMessages = function (req, res) {
    let user = req.body.user;
    db.MessageSchema.remove({sender: user}, function (err) {
        if (err) {
            throw err;
        } else {
            res.sendStatus(201);
        }
    });
};

exports.editAmount = function (req, res) {
    let username = req.body.user;
    let amount = parseInt(req.body.amount);

    db.companyCampaigns.findOne({_id: username},
        function (err, data) {
            if (err) {
                throw err;
            } else if (data.campaignAmount === 'Donation Completed') {
                console.log('my name ios jackel', data.campaignAmount);
                res.sendStatus(202);
            } else {
                let prevAmount = parseInt(data.campaignAmount);
                if (prevAmount < amount) {
                    res.sendStatus(401);
                } else {
                    amount = prevAmount - amount;

                    if (amount === 0) {
                        amount = 'Donation Completed';
                    }

                    db.companyCampaigns.update({_id: username}, {$set: {campaignAmount: amount.toString()}}, function (err, data) {
                        if (err) {
                            throw err;
                        } else {
                            res.send(data);
                        }
                    });
                }
            }
        });
};

exports.serveiceSms = function (req, res) {
    const nexmo = new Nexmo({
        apiKey: '838662f6',
        apiSecret: 'g85V0tSPQDaC4O3N'
    });

    const text = req.body.text;
    nexmo.message.sendSms('Hello From Duraidi', '00962787061743', text, (error, response) => {
        if (error) {
            throw error;
        } else if (response.messages[0].status != '0') {
            console.error('here here here', response.messages);
            console.log('Nexmo returned back a non-zero status');
        } else {
            console.log(response);
            res.sendStatus(201);
        }
    });
};

exports.serveiceSmsDuraidi = function (req, res) {
    const Duraidi = new Nexmo({
        apiKey: '17a02e40',
        apiSecret: 'gIYjQnO6z6LI6guT'
    });
    const text = req.body.text;
    Duraidi.message.sendSms('Hello From Duraidi', '00962797590369', text, (error, response) => {
        if (error) {
            throw error;
        } else if (response.messages[0].status != '0') {
            console.error('here here here', response.messages);
            console.log('Nexmo returned back a non-zero status');
        } else {
            console.log(response);
            res.sendStatus(201);
        }
    });
};

exports.serveiceSmsYussur = function (req, res) {
    const Yussur = new Nexmo({
        apiKey: 'c69f71a1',
        apiSecret: 'mbK1cnVdLch91u7v'
    });
    const text = req.body.text;
    Yussur.message.sendSms('Hello World!', '00962796906650', text, (error, response) => {
        if (error) {
            throw error;
        } else if (response.messages[0].status != '0') {
            console.error('here here here', response.messages);
            console.log('Nexmo returned back a non-zero status');
        } else {
            console.log(response);
            res.sendStatus(201);
        }
    });
};

exports.serveiceSmsMais = function (req, res) {
    const text = req.body.text;

    const Mais = new Nexmo({
        apiKey: '048b0b91',
        apiSecret: '3u9jWe2ocWsTnAKG'
    });

    Mais.message.sendSms('Hello World!', '00962776598992', text, (error, response) => {
        if (error) {
            throw error;
        } else if (response.messages[0].status != '0') {
            console.error('here here here', response.messages);
            console.log('Nexmo returned back a non-zero status');
        } else {
            console.log(response);
            res.sendStatus(201);
        }
    });
};
