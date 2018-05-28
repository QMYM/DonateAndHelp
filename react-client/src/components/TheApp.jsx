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

import Signup from './Signup.jsx'
import Login from './Login.jsx'
import Home from './Home.jsx'

class TheApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div >
        <nav className='navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top navbar-defaul'>
          <a href='#' />
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto' />
            <ul className='navbar-nav mr-auto nav '>
              <li><a href='/'>Main</a></li>
              <li><a href='/'>About</a></li>
              <li><a href='/' >Contact</a></li>
              <li><a href='/theapp' >The App</a></li>
            </ul>
            <form className='form-inline my-2 my-lg-0'>
              <Router>
                <ul className='nav navbar-nav navbar-right' >
                  <li>
                    <a href='/login' className='icon-bar' to='/login'>Login</a>
                  </li>
                  <li>
                    <a href='/signup' >Signup </a>
                  </li><li><a /></li>
                  <Route path='/login' component={Login} />
                  <Route path='/signup' component={Signup} />
                </ul>
              </Router>
              <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
              <button className='btn btn-outline-success my-2 my-sm-0 w3-bar-item w3-button w3-hide-small w3-right w3-hover-red' type='submit'> <i className='fa fa-search' />Search</button>
            </form>
          </div>
        </nav>

        <header className='w3-display-container w3-center'>
          <button className='w3-button w3-block w3-green w3-hide-large w3-hide-medium' onClick="document.getElementById('download').style.display='block'">Download <i className='fa fa-android' /> <i className='fa fa-apple' /> <i className='fa fa-windows' /></button>
          <div className='mySlides w3-animate-opacity'>
            <img className='w3-image' src='https://cdn.pixabay.com/photo/2017/04/05/11/56/image-in-the-image-2204798_960_720.jpg' alt='Image 1' style={{minWidth: 500}} width='1500' height='1000' />
            <div className='w3-display-left w3-padding w3-hide-small' style={{width: 35}}>
              <div className='w3-black w3-opacity w3-hover-opacity-off w3-padding-large w3-round-large'>
                <h1 className='w3-xlarge'>Take photos with our app</h1>
                <hr className='w3-opacity' />
                <p>Super simple installment: free of charge</p>
                <p><button className='w3-button w3-block w3-green w3-round' onClick="document.getElementById('download').style.display='block'">Download <i className='fa fa-android' /> <i className='fa fa-apple' /> <i className='fa fa-windows' /></button></p>
              </div>
            </div>
          </div>
          <div className='mySlides w3-animate-opacity'>
            <img className='w3-image' src='https://cdn.pixabay.com/photo/2017/04/05/11/56/image-in-the-image-2204798_960_720.jpg' alt='Image 2' style={{minWidth: 500}} width='1500' height='1000' />
            <div className='w3-display-left w3-padding w3-hide-small' style={{width: 35}}>
              <div className='w3-black w3-opacity w3-hover-opacity-off w3-padding-large w3-round-large'>
                <h1 className='w3-xlarge w3-text-red'><b>CLICK!</b> Fast and Easy</h1>
                <hr className='w3-opacity' />
                <p>Choose from thousands of features</p>
                <p><button className='w3-button w3-block w3-red w3-round' onClick="document.getElementById('download').style.display='block'">Download <i className='fa fa-android' /> <i className='fa fa-apple' /> <i className='fa fa-windows' /></button></p>
              </div>
            </div>
          </div>
          <div className='mySlides w3-animate-opacity'>
            <img className='w3-image' src='https://cdn.pixabay.com/photo/2017/04/05/11/56/image-in-the-image-2204798_960_720.jpg' alt='Image 3' style={{minWidth: 500}} width='1500' height='1000' />
            <div className='w3-display-left w3-padding w3-hide-small' style={{width: 35}}>
              <div className='w3-black w3-opacity w3-hover-opacity-off w3-padding-large w3-round-large'>
                <h1 className='w3-xlarge'>Smart Design</h1>
                <hr className='w3-opacity' />
                <p>Customize photos as you go</p>
                <p><button className='w3-button w3-block w3-indigo w3-round' onClick="document.getElementById('download').style.display='block'">Download <i className='fa fa-android' /> <i className='fa fa-apple' /> <i className='fa fa-windows' /></button></p>
              </div>
            </div>
          </div>
          <a className='w3-button w3-black w3-display-right w3-margin-right w3-round w3-hide-small w3-hover-light-grey' onClick='plusDivs(1)'>Take Tour <i className='fa fa-angle-right' /></a>
          <a className='w3-button w3-block w3-black w3-hide-large w3-hide-medium' onClick='plusDivs(1)'>Take Tour <i className='fa fa-angle-right' /></a>
        </header>

        <div className='w3-padding-64 w3-white'>
          <div className='w3-row-padding'>
            <div className='w3-col l8 m6'>
              <h1 className='w3-jumbo'><b>The App</b></h1>
              <h1 className='w3-xxxlarge w3-text-green'><b>Why buy it?</b></h1>
              <p><span className='w3-xlarge'>Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <button className='w3-button w3-light-grey w3-padding-large w3-section w3-hide-small' onClick="document.getElementById('download').style.display='block'">
                <i className='fa fa-download' /> Download Application
              </button>
              <p>Available for <i className='fa fa-android w3-xlarge w3-text-green' /> <i className='fa fa-apple w3-xlarge' /> <i className='fa fa-windows w3-xlarge w3-text-blue' /></p>
            </div>
            <div className='w3-col l4 m6'>
              <img src='https://cdn.pixabay.com/photo/2017/04/05/11/56/image-in-the-image-2204798_960_720.jpg' className='w3-image w3-right w3-hide-small' width='335' height='471' />
              <div className='w3-center w3-hide-large w3-hide-medium'>
                <button className='w3-button w3-block w3-padding-large' onClick="document.getElementById('download').style.display='block'">
                  <i className='fa fa-download' /> Download Application
                </button>
                <img src='https://cdn.pixabay.com/photo/2017/04/05/11/56/image-in-the-image-2204798_960_720.jpg' className='w3-image w3-margin-top' width='335' height='471' />
              </div>
            </div>
          </div>
        </div>

        <div id='download' className='w3-modal w3-animate-opacity'>
          <div className='w3-modal-content' style={{padding: 32}}>
            <div className='w3-container w3-white'>
              <i onClick="document.getElementById('download').style.display='none'" className='fa fa-remove w3-xlarge w3-button w3-transparent w3-right w3-xlarge' />
              <h2 className='w3-wide'>DOWNLOAD</h2>
              <p>Download the app in AppStore, Google Play or Microsoft Store.</p>
              <i className='fa fa-android w3-large' /> <i className='fa fa-apple w3-large' /> <i className='fa fa-windows w3-large' />
              <p><input className='w3-input w3-border' type='text' placeholder='Enter e-mail' /></p>
              <button type='button' className='w3-button w3-block w3-padding-large w3-red w3-margin-bottom' onClick="document.getElementById('download').style.display='none'">Fake Download</button>
            </div>
          </div>
        </div>

        <div className='w3-padding-64 w3-light-grey'>
          <div className='w3-row-padding'>
            <div className='w3-col l4 m6'>
              <img className='w3-image w3-round-large w3-hide-small w3-grayscale' src='https://cdn.pixabay.com/photo/2017/04/05/11/56/image-in-the-image-2204798_960_720.jpg' alt='App' width='335' height='471' />
            </div>
            <div className='w3-col l8 m6'>
              <h1 className='w3-jumbo'><b>Clarity</b></h1>
              <h1 className='w3-xxxlarge w3-text-red'><b>Pixels, who?</b></h1>
              <p><span className='w3-xlarge'>A revolution in resolution.</span> Sharp and clear photos with the world's best photo engine, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
        </div>

        <div className='w3-container w3-padding-64 w3-dark-grey w3-center'>
          <h1 className='w3-jumbo'><b>Features</b></h1>
          <p>This app is just so lorem ipsum.</p>

          <div className='w3-row' style={{marginTop: 64}}>
            <div className='w3-col s3'>
              <i className='fa fa-bolt w3-text-orange w3-jumbo' />
              <p>Fast</p>
            </div>
            <div className='w3-col s3'>
              <i className='fa fa-heart w3-text-red w3-jumbo' />
              <p>Loved</p>
            </div>
            <div className='w3-col s3'>
              <i className='fa fa-camera w3-text-yellow w3-jumbo' />
              <p>Clarity</p>
            </div>
            <div className='w3-col s3'>
              <i className='fa fa-battery-full w3-text-green w3-jumbo' />
              <p>Power</p>
            </div>
          </div>

          <div className='w3-row' style={{marginTop: 64}}>
            <div className='w3-col s3'>
              <i className='fa fa-diamond w3-text-white w3-jumbo' />
              <p>Sharp</p>
            </div>
            <div className='w3-col s3'>
              <i className='fa fa-cloud w3-text-blue w3-jumbo' />
              <p>Cloud</p>
            </div>
            <div className='w3-col s3'>
              <i className='fa fa-globe w3-text-amber w3-jumbo' />
              <p>Global</p>
            </div>
            <div className='w3-col s3'>
              <i className='fa fa-hdd-o w3-text-cyan w3-jumbo' />
              <p>Storage</p>
            </div>
          </div>

          <div className='w3-row' style={{marginTop: 64}}>
            <div className='w3-col s3'>
              <i className='fa fa-user w3-text-sand w3-jumbo' />
              <p>Safe</p>
            </div>
            <div className='w3-col s3'>
              <i className='fa fa-shield w3-text-orange w3-jumbo' />
              <p>Stabile</p>
            </div>
            <div className='w3-col s3'>
              <i className='fa fa-wifi w3-text-grey w3-jumbo' />
              <p>Connected</p>
            </div>
            <div className='w3-col s3'>
              <i className='fa fa-image w3-text-pink w3-jumbo' />
              <p>HD</p>
            </div>
          </div>
        </div>

        <div className='w3-padding-64 w3-center w3-white'>
          <h1 className='w3-jumbo'><b>Pricing</b></h1>
          <p className='w3-large'>Choose a pricing plan that fits your needs.</p>
          <div className='w3-row-padding' style={{marginTop: 64}}>
            <div className='w3-half w3-section'>
              <ul className='w3-ul w3-card w3-hover-shadow'>
                <li className='w3-dark-grey w3-xlarge w3-padding-32'>Basic</li>
                <li className='w3-padding-16'><b>250</b> Photos</li>
                <li className='w3-padding-16'><b>10</b> Features</li>
                <li className='w3-padding-16'><b>No</b> Ads</li>
                <li className='w3-padding-16'><b>Office hours</b> Support</li>
                <li className='w3-padding-16'>
                  <h2 className='w3-opacity'>$ 25</h2>
                </li>
                <li className='w3-light-grey w3-padding-24'>
                  <button className='w3-button w3-black w3-padding-large' onClick="document.getElementById('download').style.display='block'"><i className='fa fa-download' /> Download</button>
                </li>
              </ul>
            </div>
            <div className='w3-half w3-section'>
              <ul className='w3-ul w3-card w3-hover-shadow'>
                <li className='w3-red w3-xlarge w3-padding-32'>Premium</li>
                <li className='w3-padding-16'><b>1000</b> Photos</li>
                <li className='w3-padding-16'><b>50</b> Features</li>
                <li className='w3-padding-16'><b>No</b> Ads</li>
                <li className='w3-padding-16'><b>Endless</b> Support</li>
                <li className='w3-padding-16'>
                  <h2 className='w3-opacity'>$ 99</h2>
                </li>
                <li className='w3-light-grey w3-padding-24'>
                  <button className='w3-button w3-black w3-padding-large' onClick="document.getElementById('download').style.display='block'"> <i className='fa fa-download' /> Download</button>
                </li>
              </ul>
            </div>
          </div>
          <br />
        </div>

        <footer className='w3-container w3-padding-32 w3-light-grey w3-center w3-xlarge'>
          <div className='w3-section'>
            <i className='fa fa-facebook-official w3-hover-opacity' />
            <i className='fa fa-instagram w3-hover-opacity' />
            <i className='fa fa-snapchat w3-hover-opacity' />
            <i className='fa fa-pinterest-p w3-hover-opacity' />
            <i className='fa fa-twitter w3-hover-opacity' />
            <i className='fa fa-linkedin w3-hover-opacity' />
          </div>
          <p className='w3-medium'>Powered by <a href='https://www.w3schools.com/w3css/default.asp' target='_blank' className='w3-hover-text-green'>w3.css</a></p>
        </footer>

      </div>
    )
  }
}
export default TheApp
