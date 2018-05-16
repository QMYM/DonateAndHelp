import React from 'react'
import $ from 'jquery'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import {Well} from 'react-bootstrap'
import Message from './Message.jsx'
import BeneficiariesProfile from './Beneficiaries_Profile.jsx'

class Beneficiaries_Campaign extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      campaignName: '',
      campaignDescription: '',
      campaignAmount: '',
      campaignImage: '',
      massageForDOM:''
    }

    this.onChange = this.onChange.bind(this)
    this.submitCampaign = this.submitCampaign.bind(this)
    this.uploadPhotoCampaign = this.uploadPhotoCampaign.bind(this)
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  submitCampaign (campaignName, campaignDescription, campaignAmount, campaignImage) {
    var x = this
    axios.post('/companycampaign', {
      campaignName: this.state.campaignName,
      campaignDescription: this.state.campaignDescription,
      campaignAmount: this.state.campaignAmount,
      campaignImage: this.state.campaignImage
    })
      .then(response => {
        //console.log('campaign has been posted!')
        x.setState({
          messageForDOM:" You have done campaign"
        })
        setTimeout(function(){
     window.location.reload()
   },1000)
      }).catch(error => {
        alert('wrong in posting a campaign!')
      })
  }

  uploadPhotoCampaign (photo) {
    var x = this
    var file = photo.target.files[0]
    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = function (e) {
      x.setState({campaignImage: e.target.result})
    }
  }

  render () {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top navbar-defaul'>
          <a href='#'></a>
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
                  <li> <a href='/message' className='icon-bar' to='/message' >Message</a> </li>
                  <li> <a href='/Beneficiaries_Profile' className='icon-bar' to='/Beneficiaries_Profile'>Profile</a> </li>
                  <li> <a href='/' onClick={this.logout} className='icon-bar' to='/logout'>Logout</a> </li>
                  <li><a /></li>
                  <Route path='/Beneficiaries_Profile' component={BeneficiariesProfile} />
                  <Route path='/message' component={Message} />
                </ul>
              </Router>
              <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' onChange={this.search} value={this.state.term} />
              <button className='btn btn-outline-success my-2 my-sm-0 w3-bar-item w3-button w3-hide-small w3-right w3-hover-red' type='submit'> <i className='fa fa-search' />Search</button>
            </form>
          </div>
        </nav>

        <Well>
          <div className='container'>
            <div className='row'>
              <label for='usr'>Campain Name :</label>
              <input type='text' name='campaignName' onChange={this.onChange} className='form-control w3-round-xlarge' id='usr' />
              <label for='usr'>Campain Description :</label>
              <input type='text' name='campaignDescription' onChange={this.onChange} className='form-control w3-round-xlarge' id='usr' />
              <label for='usr'>Amount :</label>
              <input type='number' name='campaignAmount' onChange={this.onChange} className='form-control w3-round-xlarge' id='usr' />
              <br />
              <br />
              <form>
                <input type='file' name='image' onChange={this.uploadPhotoCampaign} />
              </form>
              <br />
              <br />
              
               

              <button className='btn btn-raised btn-warning' onClick={
                () => this.submitCampaign(this.state.campaignName, this.state.description, this.state.amount, this.state.beneficiaryName, this.state.campaignImage)
              } > Submit </button>
            </div>
          </div>
        </Well>
          <h3 style= {{color:"green"}} className="text-center">{this.state.messageForDOM}</h3>

      </div>

    )
  }
};

export default Beneficiaries_Campaign
