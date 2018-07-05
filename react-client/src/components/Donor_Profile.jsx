import React from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route} from 'react-router-dom';
import {Image} from 'react-bootstrap';

import Donor_Campaign from './Donor_Campaign.jsx';
import Search_Donor from './Search_Donor.jsx';
import Donor_Message from './Donor_Message.jsx';

class Donor_Profile extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            image: '',
            image2: '',
            name: '',
            contactNum: '',
            description: '',
            address: '',
            user: '',
            email: '',
            post: [],
            id: '',
            newDescription: '',
            newPhone: '',
            newAdress: '',
            newName: ''
        };
        this.onChange = this.onChange.bind(this);
        this.uploadPhoto = this.uploadPhoto.bind(this);
        this.deleteCampaign = this.deleteCampaign.bind(this);
        this.updateCampaign = this.updateCampaign.bind(this);
        this.onChangeCampaign = this.onChangeCampaign.bind(this);
        this.theId = this.theId.bind(this);
    }

    onChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    getInfoForProfilePageforDonor () {
        let x = this;
        axios.get('/getInfoForProfilePageforDonor').then(function (res) {
            let alo = res.data[0];
            x.setState({
                newDescription: alo.description,
                newPhone: alo.contactNum,
                newAdress: alo.address,
                newName: alo.name
            });
        }).catch(function (err) {
            throw err;
        });
    }

    submit (name, contactNum, description, address) {
        let x = this;
        axios.post('/Profile_Donor', {
            name: name,
            contactNum: contactNum,
            description: description,
            address: address
        })
            .then(response => {
                let alo = response.data;
                x.setState({
                    newDescription: alo.description,
                    newPhone: alo.contactNum,
                    newAdress: alo.address,
                    newName: alo.name
                });
            }).catch(() => {
                alert('wrong in profile update');
            });
    }

    uploadPhoto (photo) { // post the profile image and get it at the same time
        let file = photo.target.files[0];
        let fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function (e) {
            axios.post('/photoDonor', {image: e.target.result})
                .then(res => {
                    window.location.reload(); // here i'm getting the photo from database
                })
                .catch(function (error) {
                    throw error;
                });
        };
    }

    uploadPhoto2 (photo) { // post the background image and get it at the same time
        let file = photo.target.files[0];
        let fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function (e) {
            axios.post('/photoDonor2', {image2: e.target.result})
                .then(() => {
                    window.location.reload();
                })
                .catch(function (error) {
                    throw error;
                });
        };
    }

    getLargeImage () { // Get the background image
        let x = this;
        axios.get('/getImageDonor2')
            .then(function (res) {
                let post = res.data;
                x.setState({image2: post.image2});
            }).catch(function (err) {
                throw err;
            });
    }

    componentDidMount () { // Retrieve the profile information and images when the profile page is uploaded and refreshed
        this.getInfoForProfilePageforDonor();
        this.fetchDonorData();
        axios.get('/getImageDonor')
            .then(response => {
                this.fetchDonorData();
                const posts = response['data'].image;
                this.setState({ // changing the state to the new image that i fetch it from database
                    image: posts
                });
            })
            .catch(function (error) {
                throw error;
            });
        let x = this;
        axios.get('/donorCam')
            .then(res => {
                let posts = [];
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].username === this.state.user) {
                        posts.push(res.data[i]);
                        x.setState({post: posts});
                    }
                }
            });
        this.getLargeImage();
    }

    fetchDonorData () {
        let x = this;
        axios.get('/fetchDonorData').then(function (res) {
            let user = res.data.username;
            let email = res.data.email;
            x.setState({
                user: user,
                email: email
            });
        }).catch(function (err) {
            throw err;
        });
    }

    deleteCampaign (delCampaignID) {
        axios.post('/delCampaignDonor', {
            CampID: delCampaignID
        })
            .then(() => {
                alert('campaign has been deleted!');
                window.location.reload();
            }).catch(error => {
                alert('error in campaign deletion!', error);
            });
    }

    onChangeCampaign (e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    updateCampaign (campaignID, campaignName, campaignDescription, campaignAmount, name) {
        axios.put('/editCampaignDonor', {
            campaignID: campaignID,
            campaignName: campaignName,
            campaignDescription: campaignDescription,
            campaignAmount: campaignAmount,
            username: name
        })
            .then(() => {
                alert('campaign has been edited!');
                window.location.reload();
            }).catch(() => {
                alert('error in campaign edit!');
            });
    }

    theId (id) {
        this.setState({id: id});
    }

    logout () {
        axios.get('/logout')
            .then(function () {
                window.location.href = '/';
            }).catch(function (err) {
                throw err;
            });
    }

    render () {
        return (
            <div style={{background: 'white'}}>
                <nav className='navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top navbar-defaul'>
                    <a href='#' />
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon' />
                    </button>

                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav mr-auto' />
                        <ul className='navbar-nav mr-auto nav '>
                            <li><a href='/donor'>Home</a></li>
                            <li><a href='/Donor_Campaign'>Donation</a></li>
                        </ul>
                        <form className='form-inline my-2 my-lg-0'>
                            <Router>
                                <ul className='nav navbar-nav navbar-right ' >
                                    <li> <a href='/searchD' className='icon-bar' >Search</a> </li>
                                    <li> <a href='/Donor_Message' className='icon-bar' to='/Donor_Message'>Message</a> </li>
                                    <li> <a href='/Donor_Profile' className='icon-bar' to='/Donor_Profile'>Profile</a> </li>
                                    <li> <a href='#'onClick={this.logout} className='icon-bar' to='/logout'>Logout</a> </li>
                                    <li><a /></li>
                                    <Route path='/Donor_Message' component={Donor_Message} />
                                    <Route path='/Donor_Campaign' component={Donor_Campaign} />
                                    <Route path='/searchD' component={Search_Donor} />
                                </ul>
                            </Router>
                            <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' onChange={this.search} value={this.state.term} />
                            <button className='btn btn-outline-success my-2 my-sm-0 w3-bar-item w3-button w3-hide-small w3-right w3-hover-red' type='submit'> <i className='fa fa-search' />Search</button>
                        </form>
                    </div>
                </nav>

                <form>
                    <div className='container'>
                        <div className='profile'>
                            <div className='container'>
                                <img className='image-lg ' alt='Profile' src={this.state.image2 || 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'} />
                                <div className='middle '>
                                    <div className='text '>
                                        <label className='btn' style={{color: 'black'}}>
                                            <input type='file' name='image' id='photo' style={{display: 'none'}} onChange={this.uploadPhoto2} /> Update Your Image
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <label style={{color: 'black'}}>
                                <div className='text-block' />
                            </label>
                        </div>
                    </div>
                </form>

                <div className='modal fade' id='myModal' role='dialog'>
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h4 className='modal-title'>Information</h4>
                                <button type='button' className='close' data-dismiss='modal'>&times;</button>
                            </div>
                            <div className='modal-body'>

                                <div className='input-group'>
                                    <span className='input-group-addon'><i className='fa fa-phone' /></span>
                                    <input type='text' className='form-control' name='contactNum' onChange={this.onChange} placeholder='ContactNumber' />
                                </div>
                                <br />
                                <div className='input-group'>
                                    <span className='input-group-addon'><i className='fa fa-address-card-o' /></span>
                                    <input type='text' className='form-control' name='description' onChange={this.onChange} placeholder='Description' />
                                </div>
                                <br />
                                <div className='input-group'>
                                    <span className='input-group-addon'><i className='fa fa-automobile' /></span>
                                    <input type='text' className='form-control' name='address' onChange={this.onChange} placeholder='Address' />
                                </div>
                                <br />
                            </div>
                            <div className='modal-footer'>
                                <button type='button' className='btn btn-raised btn-info' data-dismiss='modal' onClick={() => this.submit(this.state.name, this.state.contactNum,
                                    this.state.description, this.state.address)}>Done</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='modal fade' id='myModal2' role='dialog2'>
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h4 className='modal-title'>Information</h4>
                                <button type='button' className='close' data-dismiss='modal'>&times;</button>
                                <h4 className='modal-title'>Edit Information</h4>
                            </div>
                            <div className='modal-body'>
                                <div className='input-group'>
                                    <span className='input-group-addon'><i className='glyphicon glyphicon-user' /></span>
                                    <input type='text' className='form-control' name='campaignName' onChange={this.onChangeCampaign} placeholder='Donation Name' />
                                </div>
                                <br />
                                <div className='input-group'>
                                    <span className='input-group-addon'><i className='fa fa-address-card-o' /></span>
                                    <input type='text' className='form-control' name='campaignDescription' onChange={this.onChangeCampaign} placeholder='Donation Description' />
                                </div>
                                <br />
                                <div className='input-group'>
                                    <span className='input-group-addon'><i className='fa fa-automobile' /></span>
                                    <input type='text' className='form-control' name='campaignAmount' onChange={this.onChangeCampaign} placeholder='Donation Amount' />
                                </div>
                                <br />
                            </div>
                            <div className='modal-footer'>
                                <button type='button' className='btn btn-raised btn-info' data-dismiss='modal' onClick={() => this.updateCampaign(this.state.id, this.state.campaignName,
                                    this.state.campaignDescription, this.state.campaignAmount, this.state.user)}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='user-profile'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='profile-info-left' >
                                    <div className='text-center'>
                                        <div className='container'>
                                            <Image rounded className='avatar ' alt='Profile image example' src={this.state.image || 'https://orig00.deviantart.net/1471/f/2013/110/f/a/facebook_default_pic__2____copy_by_neuronboy42-d62cgrr.jpg'} />
                                            <div className='middle '>
                                                <div className='text '>
                                                    <label className='btn' style={{color: 'black'}}>
                                                        <input type='file' name='image' id='photo' style={{display: 'none'}} onChange={this.uploadPhoto} /> Update Your Image
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <h2>{this.state.user}</h2>
                                    </div>
                                    <div className='action-buttons'>
                                        <div className='row'>
                                            <div className='col-xs-12'>
                                                <a href='/Donor_Message' className='btn btn-raised btn-danger'><i className='fa fa-android-mail' /> Message</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='section' >
                                        <h3>About Me</h3>
                                        <div className='btn-group pull-right activity-actions'>
                                            <button type='button' className='btn btn-xs btn-default dropdown-toggle' data-toggle='dropdown'>
                                                <i className='fa fa-edit' />
                                                <span className='sr-only'>Toggle Dropdown</span>
                                            </button>
                                            <ul className='dropdown-menu dropdown-menu-right' role='menu'>
                                                <li><a data-toggle='modal' data-target='#myModal'>Edit</a></li>
                                            </ul>
                                        </div>
                                        <p className='fa fa-address-card-o'> description: {this.state.newDescription}</p><br />
                                    </div>
                                    <div className='section'>
                                        <h3>Information</h3>
                                        <p className='glyphicon glyphicon-user'>nickname: {this.state.user}</p><br />
                                        <p className='  fa fa-address-card-o'> {this.state.email}</p><br />
                                        <p className='fa fa-phone'>phone-number: {this.state.newPhone}</p><br />
                                        <p className='  fa fa-automobile'>Address: {this.state.newAdress}</p>
                                    </div>
                                    <div className='section'>
                                        <h3>Social</h3>
                                        <ul className='list-unstyled list-social'>
                                            <li><a href='https://twitter.com/' target='_blank'>Visit Twitter<bh /> <bh /><i className='fa fa-twitter' /> </a></li>
                                            <li><a href='https://www.facebook.com/' target='_blank'>Visit Facebook <bh /> <bh /> <i className='fa fa-facebook' /> </a></li>
                                            <li><a href='https://dribbble.com/' target='_blank'>Visit Dribbble <bh /> <bh /><i className='fa fa-dribbble' /> </a></li>
                                            <li><a href='https://www.linkedin.com/' target='_blank'>Visit linkedin<bh /> <bh /><i className='fa fa-linkedin' /> </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-8'>
                                <div className='profile-info-right'>
                                    <ul className='nav nav-pills nav-pills-custom-minimal custom-minimal-bottom'>
                                        <li className='active'><a href='#activities' data-toggle='tab'>ACTIVITIES</a></li>
                                        <li><a href='#following' data-toggle='tab'>FOLLOWING</a></li>
                                    </ul>
                                    <div className='tab-content'>
                                        <div className='tab-pane fade in active' id='activities'>

                                            {this.state.post.map(po =>
                                                <div className='media activity-item' key={po._id}>
                                                    <a href='#' className='pull-left'>
                                                        <img src={this.state.image || 'https://orig00.deviantart.net/1471/f/2013/110/f/a/facebook_default_pic__2____copy_by_neuronboy42-d62cgrr.jpg'} alt='Avatar' className='media-object avatar' />
                                                    </a>
                                                    <div className='media-body'>
                                                        <p className='activity-title'><a href='#'>{this.state.user}</a> posted something <small className='text-muted'>- 1h ago</small></p>
                                                        <small className='text-muted'>Today 07:23 am - 02.05.2014</small>
                                                        <div className='activity-attachment'>
                                                            <div>
                                                                <h2>Campaign Name : {po.campaignName}</h2>
                                                                <h3>{po.campaignDescription}</h3>
                                                                <h3>{po.campaignAmount}</h3>
                                                            </div>
                                                            <a href='#' className='thumbnail'>
                                                                <img src={po.campaignImage || 'https://www.arabamerica.com/wp-content/themes/arabamerica/assets/img/thumbnail-default.jpg'} alt='Uploaded photo' style={{width: '300px', hight: '300px'}} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className='btn-group pull-right activity-actions'>
                                                        <button type='button' className='btn btn-xs btn-default dropdown-toggle' data-toggle='dropdown'>
                                                            <i className='fa fa-th' />
                                                            <span className='sr-only'>Toggle Dropdown</span>
                                                        </button>
                                                        <ul className='dropdown-menu dropdown-menu-right' role='menu'>
                                                            <li><a href='#' onClick={() => this.deleteCampaign(po._id)}>Delete</a></li>
                                                            <li><a href='#' data-toggle='modal' data-target='#myModal2' onClick={() => this.theId(po._id)}>Edit</a></li>
                                                        </ul>
                                                    </div>
                                                    <hr />
                                                </div>
                                            )}

                                        </div>
                                        <div className='tab-pane fade' id='following'>
                                            <div className='media user-following'>
                                                <img src='http://bootdey.com/img/Content/avatar/avatar1.png' alt='User Avatar' className='media-object pull-left' />
                                                <div className='media-body'>
                                                    <a href='#'>Stella<br /><span className='text-muted username'>@stella</span></a>
                                                    <button type='button' className='btn btn-sm btn-danger pull-right'><i className='fa fa-close-round' /> Unfollow</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Donor_Profile;
