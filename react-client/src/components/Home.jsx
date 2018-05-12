import React from 'react'
import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import axios from 'axios'
import {Button} from 'react-bootstrap';

import Signup from './Signup.jsx'
import Login from './Login.jsx'
import TheApp from './TheApp.jsx'

const Home = (props) => (<div >

  <nav className='navbar navbar-fixed-top navbar-default '>
  <div className='container'>
  <div className='navbar-header'>
  <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
  <span className='icon-bar' />
  <span className='icon-bar' />
  <span className='icon-bar' />
  </button>
  <ul className='navbar-nav mr-auto nav '>
  <li>  <a href='#Home'>Main</a></li>
  <li ><a href='#About'>About</a></li>
  <li><a href='#Contact' >Contact</a></li>
  <li><a href='/theapp' >The App</a></li>
  <Route path='/theapp' component={TheApp}   />
  </ul>
  </div>
  <div className='collapse navbar-collapse' id='myNavbar'>
  <form className=' '>
  <Router>
  <ul className='nav navbar-nav navbar-right' >
  <li>
  <a href="/login" className='icon-bar' to='/login'>Login</a>
  </li>
  <li>
  <a href="/signup" className='text-light '>Signup </a>
  </li>
  <li>
  <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
  <i className="fa fa-search"></i>
  </a></li>
  <Route path='/login' component={Login}   />
  <Route path='/signup' component={Signup}/>
  </ul>
  </Router>
  </form>
  </div>
  </div>
  </nav>

  <div className="bgimg-2 w3-display-container w3-opacity-min" id="Home">
  <div className="w3-display-middle" >
  <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">MY <span className="w3-hide-small">WEBSITE</span> LOGO</span>
  </div>
  </div>

  <div className="w3-content w3-container w3-padding-64" id="About">
  <h3 className="w3-center">ABOUT US</h3>
  <p className="w3-center"><em>Dononrs</em></p>
  <p>We have created a fictional "personal" website/blog, and our fictional character is a hobby photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
  <div className="w3-row">
  <div className="w3-col m6 w3-center w3-padding-large">
  <p><b><i className="fa fa-user w3-margin-right"></i></b></p><br/>
  <img src="http://blog.zealousgood.com/wp-content/uploads/2013/03/Donors.jpeg" className="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="500" height="333"></img>
  </div>

  <div className="w3-col m6 w3-hide-small w3-padding-large">
  <p>Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
  </div>
  </div>

  <div className="w3-row w3-center w3-dark-grey w3-padding-16">
  <div className="w3-quarter w3-section">
  <span className="w3-xlarge">14+</span><br/>
  Partners
  </div>
  <div className="w3-quarter w3-section">
  <span className="w3-xlarge">55+</span><br/>
  Projects Done
  </div>
  <div className="w3-quarter w3-section">
  <span className="w3-xlarge">89+</span><br/>
  Happy Clients
  </div>
  <div className="w3-quarter w3-section">
  <span className="w3-xlarge">150+</span><br/>
  Meetings
  </div>
  </div>

  <div className="bgimg-3 w3-display-container w3-opacity-min">
  <div className="w3-display-middle">
  <span className="w3-xxlarge w3-text-white w3-wide">IDEA</span>
  </div>
  </div>

  <div className=" w3-container w3-padding-64" id="portfolio">
  <h3 className="w3-center">OUR TEAM</h3>
  <p className="w3-center"><em>Here is the team behind this big project :D<br/></em></p><br/>


  <div className="w3-row-padding w3-grayscale">
    <div className="w3-col l3 m6 w3-margin-bottom">
      <img src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/23473196_915825728566887_4239089197692234922_n.jpg?_nc_cat=0&oh=c8d8c960fe956f1573fa8072743d69f2&oe=5B8FBDE3" alt="John" style={{width:"100%"}}/>
      <h3>Qays Trad</h3>
      <p className="w3-opacity">CEO & Founder</p>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
      <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <img src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/32207749_10204687882073435_1576086593419083776_n.jpg?_nc_cat=0&oh=bdede7d612bfa26c151908dc6ff63aa1&oe=5B9A74BB" alt="Jane" style={{width:"100%"}}/>
      <h3>Mohammed Duraidi</h3>
      <p className="w3-opacity">Sha7ad</p>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
      <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <img src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/18527753_10154354095631852_7605981024395115852_n.jpg?_nc_cat=0&oh=99bda792ec1a737846eda8ad22c31edc&oe=5B8DF2C3" alt="Mike" style={{width:"100%"}}/>
      <h3>Mais Muhtaseb</h3>
      <p className="w3-opacity">Architect</p>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
      <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <img src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/27067119_10155568249638369_452583962590222091_n.jpg?_nc_cat=0&oh=d77b2bbfb5860f16dcf448fb1cb3dd7e&oe=5B8023B5" alt="Dan" style={{width:"100%"}}/>
      <h3>Yussur Alani</h3>
      <p className="w3-opacity">Architect</p>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
      <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
    </div>
  </div>

  </div>

  <div id="modal01" className="w3-modal w3-black" >
  <span className="w3-button w3-large w3-black w3-display-topright" title="Close Modal Image"><i className="fa fa-remove"></i></span>
  <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
  <img id="img01" className="w3-image"/>
  <p id="caption" className="w3-opacity w3-large"></p>
  </div>
  </div>

  <div className="homeImg w3-display-container w3-opacity-min" id="Contact">
  <div className="w3-display-middle">
  <span className="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
  </div>
  </div>

<div id="contact" className="container">
  <br/>
  
  <h3 className="text-center">You Can Contact With Us AnyTime </h3>
  <br/>

  <div className="row">
    <div className="col-md-4">
      <p><span className="glyphicon glyphicon-map-marker"></span>Amman , Jordan</p>
      <p><span className="glyphicon glyphicon-phone"></span>Phone: +00 787888888</p>
      <p><span className="glyphicon glyphicon-envelope"></span>Email: mail@mail.com</p>
    </div>
    <div className="col-md-8">
      <div className="row">
        <div className="col-sm-6 form-group">
          <input className="form-control" id="name" name="name" placeholder="Name" type="text" required/>
        </div>
        <div className="col-sm-6 form-group">
          <input className="form-control" id="email" name="email" placeholder="Email" type="email" required/>
        </div>
      </div>
      <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
      <br/>
      <div className="row">
        <div className="col-md-12 form-group">
          <button className="btn pull-right fa fa-paper-plane" type="submit">Send</button>
        </div>
      </div>
    </div>
  </div>
  <br/>
</div>

  <footer className="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
  <a href="#home" className="w3-button w3-light-grey"><i className="fa fa-arrow-up w3-margin-right"></i>To the top</a>
  <div className="w3-xlarge w3-section">
  <ul className="collapse navbar-collapse">
  <i className="fa fa-facebook-official w3-hover-opacity"></i>
  <i className="fa fa-instagram w3-hover-opacity"></i>
  <i className="fa fa-snapchat w3-hover-opacity"></i>
  <i className="fa fa-pinterest-p w3-hover-opacity"></i>
  <i className="fa fa-twitter w3-hover-opacity"></i>
  <i className="fa fa-linkedin w3-hover-opacity"></i>
  </ul>
  </div>
  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" className="w3-hover-text-green">w3.css</a></p>
  </footer>
  </div>
  )
export default Home
