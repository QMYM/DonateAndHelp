import React from 'react'
import $ from 'jquery'
import axios from 'axios'
import {Image} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import BeneficiariesMessage from './Beneficiaries_Message.jsx'
import BeneficiariesCampaign from './Beneficiaries_Campaign.jsx'

class Beneficiaries_Profile extends React.Component {
  constructor (props) {
    super(props)
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
      campaignName: '',
      campaignDescription: '',
      campaignAmount: '',
      id: '',
      newDescription: '',
      newPhone: '',
      newAdress: '',
      newName: ''
    }
    this.onChange = this.onChange.bind(this)
    this.uploadPhoto = this.uploadPhoto.bind(this)
    this.deleteCampaign = this.deleteCampaign.bind(this)
    this.updateCampaign = this.updateCampaign.bind(this)
    this.onChangeCampaign = this.onChangeCampaign.bind(this)
    this.theId = this.theId.bind(this)
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  getInfoForProfilePage () {
    var x = this
    axios.get('/getInfoForProfilePage').then(function (res) {
      var alo = res.data[0]
      x.setState({
        newDescription: alo.description,
        newPhone: alo.contactNum,
        newAdress: alo.address,
        newName: alo.name
      })
    }).catch(function (err) {
      console.lof(err)
    })
  }

  submit (name, contactNum, description, address) {
    var x = this
    axios.post('/profile_company', {
      // image: this.state.image, 
      name: this.state.name,
      contactNum: this.state.contactNum,
      description: this.state.description,
      address: this.state.address
    })
      .then(response => {
        var alo = response.data
        console.log('profile has been updated', response.data)
        // should go to the home page from here
        x.setState({
          newDescription: alo.description,
          newPhone: alo.contactNum,
          newAdress: alo.address,
          newName: alo.name
        })
      }).catch(error => {
        alert('wrong in profile update')
      })
  }

  uploadPhoto (photo) { // post the photo and get the photo in the same time
    var x = this
    var file = photo.target.files[0]
   
    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = function (e) {
       
      axios.post('/photo', {image: e.target.result})
        .then(res => {

          window.location.reload() // here i'm getting the photo from database
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  uploadPhoto2 (photo) { // post the photo and get the photo in the same time
    var x = this
    var file = photo.target.files[0]
    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = function (e) {
      axios.post('/photo2', {image2: e.target.result})
        .then(res => {
          window.location.reload() // here i'm getting the photo from database
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  getLargeImage () {
    var x = this
    axios.get('/getImage2')
      .then(function (res) {
        var post = res.data
        x.setState({image2: post.image2})
      }).catch(function (err) {
        console.log(err)
      })
  }

  componentDidMount () { // this is the initial
    this.getCampaignData();
    this.getInfoForProfilePage();
    axios.get('/getImage')
      .then(response => {
        const posts = response['data']
        this.setState({ // changing the state to the new image that i fetch it from database
          image: posts.image
          // image2:posts.image
        })
        this.fetchCompanyData()
      })
      .catch(function (error) {
        console.log(error)
      })
    this.getLargeImage()
  }

  fetchCompanyData () {
    var x = this
    axios.get('/fetchCompanyData').then(function (res) {
      var user = res.data.username
      var email = res.data.email
      x.setState({
        user: user,
        email: email
      })
    }).catch(function (err) {
      console.log('error', err)
    })
  }
    
  getCampaignData(){
    axios.get('/companyCam')
      .then(res => {
        var posts = []
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].username === this.state.user) {
            posts.push(res.data[i])
            x.setState({post: posts})
          }
        }
      })
  }
  }

  deleteCampaign (delCampaignID) {
    axios.post('/delCampaignComp', {
      CampID: delCampaignID
    })
      .then(response => {
        alert('campaign has been deleted!')
        window.location.reload()
      }).catch(error => {
        alert('error in campaign deletion!', error)
      })
  }

  onChangeCampaign (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateCampaign (campaignID, campaignName, campaignDescription, campaignAmount, name) {
    axios.put('/editCampaignComp', {
      campaignID: campaignID,
      campaignName: campaignName,
      campaignDescription: campaignDescription,
      campaignAmount: campaignAmount,
      username: name
    })
      .then(response => {
        alert('campaign has been edited!')
        window.location.reload()
      }).catch(error => {
        alert('error in campaign edit!')
      })
  }
  theId (id) {
    this.setState({id: id})
  }
  logout () {
    axios.get('/logout')
      .then(function (res) {
        window.location.href = '/'
      }).catch(function (err) {
        console.log('logout err ', err)
      })
  }

  render () {
    return (
      <div style={{background: 'white'}} >

        <nav className='navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top navbar-defaul'>
          <a href='#' />
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto' />
            <ul className='navbar-nav mr-auto nav '>
              <li><a href='/beneficiaries' to='/beneficiaries'>Home</a></li>
              <li><a href='/Beneficiaries_Campaign' to='/Beneficiaries_Campaign'>Campaign</a></li>
            </ul>
            <form className='form-inline my-2 my-lg-0'>
              <Router>
                <ul className='nav navbar-nav navbar-right ' >
                  <li> <a href='/search' className='icon-bar' >Search</a> </li>
                  <li> <a href='/Beneficiaries_Message' className='icon-bar' to='/Beneficiaries_Message' >Message</a> </li>
                  <li> <a href='/Beneficiaries_Profile' className='icon-bar' to='/Beneficiaries_Profile'>Profile</a> </li>
                  <li> <a href='/' onClick={this.logout} className='icon-bar' to='/logout'>Logout</a> </li>
                  <li><a /></li>
                  <Route path='/Beneficiaries_Message' component={BeneficiariesMessage} />
                  <Route path='/Beneficiaries_Campaign' component={BeneficiariesCampaign} />
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
                <img className='image-lg ' alt='Profile' src={this.state.image2 || 'https://orig00.deviantart.net/3cc1/f/2012/247/1/b/meelo_facebook_default_profile_picture_by_redjanuary-d5dmoxd.jpg'} />
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
                  <span className='input-group-addon'><i className='glyphicon glyphicon-user' /></span>
                  <input type='text' className='form-control' name='name' onChange={this.onChange} placeholder='NickName' />
                </div>
                <br />

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
                  <div className='input-group'>
                    <span className='input-group-addon'><i className='glyphicon glyphicon-user' /></span>
                    <input type='text' className='form-control' name='campaignName' onChange={this.onChangeCampaign} placeholder='Campaign Name' />
                  </div>
                  <br />
                  <div className='input-group'>
                    <span className='input-group-addon'><i className='fa fa-address-card-o' /></span>
                    <input type='text' className='form-control' name='campaignDescription' onChange={this.onChangeCampaign} placeholder='Campaign Description' />
                  </div>
                  <br />
                  <div className='input-group'>
                    <span className='input-group-addon'><i className='fa fa-automobile' /></span>
                    <input type='text' className='form-control' name='campaignAmount' onChange={this.onChangeCampaign} placeholder='Campaign Amount' />
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
        </div>

        <div className='container'>
          <div className='user-profile'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='profile-info-left' >
                  <div className='text-center'>
                    <div className='container'>
                      <Image circle className='avatar ' alt='Profile image example' src={this.state.image || 'https://orig00.deviantart.net/3cc1/f/2012/247/1/b/meelo_facebook_default_profile_picture_by_redjanuary-d5dmoxd.jpg'} />
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
                        <a href='/Beneficiaries_Message' className='btn btn-raised btn-danger'><i className='fa fa-android-mail' /> Message</a>
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
                    <p className='fa fa-address-card-o'> Description: {this.state.newDescription}</p><br />

                  </div>
                  <div className='section'>
                    <h3>Information</h3>
                    <p className='glyphicon glyphicon-user'>Nickname: {this.state.user}</p><br />
                    <p className='  fa fa-address-card-o'> {this.state.email}</p><br />
                    <p className='fa fa-phone'>Phone-Number: {this.state.newPhone}</p><br />
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
                    <li className='active'><a href='#activities' data-toggle='tab'>Campaigns</a></li>
                    <li><a href='#following' data-toggle='tab'>FOLLOWING</a></li>
                  </ul>
                  <div className='tab-content'>
                    <div className='tab-pane fade in active' id='activities'>

                      {this.state.post.map(po =>
                        <div className='media activity-item'>
                          <a href='#' className='pull-left'>
                            <img src={this.state.image || 'http://bootdey.com/img/Content/avatar/avatar3.png'} alt='Avatar' className='media-object avatar' />
                          </a>
                          <div className='media-body'>
                            <p className='activity-title'><a href='#'>{this.state.user}</a> posted something <small className='text-muted'>- 1h ago</small></p>
                            <small className='text-muted'>Today 07:23 am - 02.05.2014</small>
                            <div className='activity-attachment'>
                              <div>
                                <h2>Campaign Name : {po.campaignName}</h2>
                                <h3>{po.campaignDescription}</h3>
                                <h3>{po.campaignAmount}</h3>
                                <h3>{po.campaignAmount}</h3>
                              </div>
                              <a href='#' className='thumbnail'>
                                <img src={po.campaignImage || 'http://bootdey.com/img/Content/avatar/avatar1.png'} alt='Uploaded photo' style={{width: '300px', hight: '300px'}} />
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
    )
  }
}

export default Beneficiaries_Profile
