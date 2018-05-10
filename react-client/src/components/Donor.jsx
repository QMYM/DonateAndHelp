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
import Profile_Donor from './Profile_Donor.jsx'
import Message from './Message.jsx'
class Donor extends React.Component {
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
      <div >
      <nav className='navbar navbar-inverse navbar-fixed-top'>
          <div className='container'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                <span className='icon-bar' />
                <span className='icon-bar' />
                <span className='icon-bar' />
              </button>
              <ul className='navbar-nav mr-auto nav '>
                <li>  <a herf='/home'>Home</a></li>
                <li ><a href='#About'>Benf</a></li>
                <li><a href='#Contact' >Also Something</a></li>
              </ul>
            </div>
            <div className='collapse navbar-collapse' id='myNavbar'>
              <form className=' '>

      <Router>
      <ul className='nav navbar-nav navbar-right' >
      <li> <a href='/message' className='icon-bar' to='/message'>Message</a> </li>
      <li> <a href='/profile' className='icon-bar' to='/profile'>Profile</a> </li>
      <li> <a onClick={this.logout} className='icon-bar' to='/logout'>Logout</a> </li>
      <Route path='/message' component={Message} />
      <Route path='/profile' component={Profile_Donor}/>
      </ul>
      </Router>
      </form>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
export default Donor
