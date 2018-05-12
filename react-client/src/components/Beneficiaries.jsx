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
<<<<<<< HEAD
import Campaign from './Campaign.jsx'
import Profile from './Profile.jsx'
=======
import Beneficiaries_Campaign from './Beneficiaries_Campaign.jsx'
import BeneficiariesProfile from './Beneficiaries_Profile.jsx'
>>>>>>> 6de77477c44e5d77a37562685554d1f505a97d05

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
    <Router>
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
    <li>  <Link to='/'>Home</Link></li>
    <li ><Link href='/Beneficiaries_Campaign' to='/Beneficiaries_Campaign'>Beneficiaries_Campaign</Link></li>
    </ul>
    </div>
    <div className='collapse navbar-collapse' id='myNavbar'>
    <form className=' '>

    <ul className='nav navbar-nav navbar-right ' >
    <li> <a href='/search' className='icon-bar' >Search</a> </li>
    <li> <Link className='icon-bar' to='/message' replace >Message</Link> </li>
<<<<<<< HEAD
    <li> <Link  className='icon-bar' to='/Profile'>Profile</Link> </li>
=======
    <li> <Link  className='icon-bar' to='/Beneficiaries_Profile'>Profile</Link> </li>
>>>>>>> 6de77477c44e5d77a37562685554d1f505a97d05
    <li> <a onClick={this.logout} className='icon-bar' to='/logout'>Logout</a> </li>
    </ul>
    </form>
    </div>
    </div>
    </nav> 
    <br/>

    <div className="content">
<<<<<<< HEAD
    <Route path="/Profile" render={()=><Profile component={Profile}/> } />
=======
    <Route path="/Beneficiaries_Profile" render={()=><BeneficiariesProfile /> } />
>>>>>>> 6de77477c44e5d77a37562685554d1f505a97d05
    <Route path="/Message" render={()=><Message /> } />
    <Route path="/Campaign" render={()=><Campaign /> } />

    </div>

    </div>

    </Router>
      </div>
      )
  }
}
export default Beneficiaries
