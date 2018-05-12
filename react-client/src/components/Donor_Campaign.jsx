import React from 'react'
import $ from 'jquery'
import axios from 'axios'
import {Well} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import Donor_Profile from './Donor_Profile.jsx'
import Search_Donor from './Search_Donor.jsx'
import Message from './Message.jsx'

class Donor_Campaign extends React.Component {

	constructor (props) {
    super(props)
    this.state = {
      campaignName: '',
      campaignDescription: '',
      campaignAmount: '',
      campaignImage: ''
    }
    
    this.onChange = this.onChange.bind(this);
    this.submitCampaign = this.submitCampaign.bind(this);
    this.uploadPhotoCampaign = this.uploadPhotoCampaign.bind(this);
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  submitCampaign(campaignName,campaignDescription,campaignAmount){
  axios.post('/campaignInfo', {
      campaignName: this.state.campaignName,
      campaignDescription: this.state.campaignDescription,
      campaignAmount: this.state.campaignAmount
    })
  .then(response => {
    console.log('campaign has been posted!')
      }).catch(error => {
        alert('wrong in posting a campaign!')
      })
    }

  uploadPhotoCampaign(photo){  
   var x=this;
   var file = photo.target.files[0];
   var fileReader = new FileReader();
   fileReader.readAsDataURL(file);
   fileReader.onload = function(e) {
    axios.post('/imageCampaign', {campaignImage: e.target.result})
    .then(res => {
             console.log("Image campaign has been uploaded!");
           })
    .catch(function (error) {
      console.log(error);
    });
   
    

  }
}

  render(){

   return (
    <div>
        <nav className='navbar navbar-fixed-top navbar-default'>
    <div className='container'>
    <div className='navbar-header'>
    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
    <span className='icon-bar' />
    <span className='icon-bar' />
    <span className='icon-bar' />
    </button>
    <ul className='navbar-nav mr-auto nav '>
    <li>  <a herf='/home'>Home</a></li>
    <li ><a href='/Donor_Campaign'>Campaign</a></li>
    </ul>
    </div>
    <div className='collapse navbar-collapse' id='myNavbar'>
    <form className=' '>

    <Router>
    <ul className='nav navbar-nav navbar-right ' >
    <li> <a href='/searchD' className='icon-bar' >Search</a> </li>
    <li> <a href='/message' className='icon-bar' to='/message'>Message</a> </li>
    <li> <a href='/Donor_Profile' className='icon-bar' to='/Donor_Profile'>Profile</a> </li>
    <li> <a href ="#"onClick={this.logout} className='icon-bar' to='/logout'>Logout</a> </li>
    <Route path='/message' component={Message} />
    <Route path='/Donor_Profile' component={Donor_Profile}/>
    <Route path='/searchD' component={Search_Donor}/>
    </ul>
    </Router>
    </form>
    </div>
    </div>
    </nav> 
  <br/>
    <br/>
    <br/>
    <Well>
      <div className="container">
        <div className='row'>
        <div className="form-group">
  <label for="usr">Campain Name :</label>
  <input type="text" name="campaignName" onChange={this.onChange}  className="form-control w3-round-xlarge" id="usr"/>
</div>
  <div className="form-group">
  <label for="usr">Campain Description :</label>
  <input type="text" name="campaignDescription" onChange={this.onChange}  className="form-control w3-round-xlarge" id="usr"/>
</div>  <div className="form-group">
  <label for="usr">Amount :</label>
  <input type="text" className="form-control w3-round-xlarge" id="usr"/>
</div>  <div className="form-group">
  <label for="usr">Name:</label>
  <input type="text" className="form-control w3-round-xlarge" id="usr"/>
</div>
    <span><img src = {this.state.campaignImage} /> </span>
    <label></label>
    <input type="text" name="campaignAmount" onChange={this.onChange} />
    <br/>
    <label>Beneficiary Name</label>
    <input type="text" onChange={this.onChange} />
    <br/>
    <form>
    <input type="file" name="image" onChange={this.uploadPhotoCampaign}/>
    Choose image
    </form>
    <br/>
    <button className="btn" onClick={
      () => this.submitCampaign(this.state.campaignName, this.state.description, this.state.amount , this.state.beneficiaryName)
    } > Submit </button>
      </div>
        </div>
    </Well>
    </div>

    )

 }

};

export default Donor_Campaign;