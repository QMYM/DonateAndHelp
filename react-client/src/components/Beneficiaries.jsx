import React from 'react'
import $ from 'jquery'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import Message from './Message.jsx'
import BeneficiariesCampaign from './Beneficiaries_Campaign.jsx'
import BeneficiariesProfile from './Beneficiaries_Profile.jsx'

class Beneficiaries extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    this.logout = this.logout.bind(this)
  }
  logout (){
    axios.get("/logout")
    .then(function (res) {
      console.log('ea eshe ')
      window.location.href="/"
    }).catch(function (err){
      console.log("logout err "  ,err)
    })
  }

  render () {
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
    <li>  <a to='/'>Home</a></li>
    <li ><a href='/Beneficiaries_Campaign' to='/Beneficiaries_Campaign'>Campaign</a></li>
    </ul>
    </div>
    <div className='collapse navbar-collapse' id='myNavbar'>
    <form className=' '>
    <Router>
    <ul className='nav navbar-nav navbar-right ' >
    <li> <a href='/search' className='icon-bar' >Search</a> </li>
    <li> <a href='/message' className='icon-bar' to='/message' replace >Message</a> </li>
    <li> <a href='/Beneficiaries_Profile' className='icon-bar' to='/Beneficiaries_Profile'>Profile</a> </li>
    <li> <a href='/' onClick={this.logout} className='icon-bar' to='/logout'>Logout</a> </li>
    <Route path="/Beneficiaries_Profile" component={BeneficiariesProfile} />
    <Route path="/message" component={Message} />
    <Route path="/Beneficiaries_Campaign" component = {BeneficiariesCampaign} />
    </ul>
    </Router>
    </form>
    </div>
    </div>
    </nav> 
    <br/>

      </div>
      )
  }
}
export default Beneficiaries
