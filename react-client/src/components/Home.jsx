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

import Signup from './Signup.jsx'
import Login from './Login.jsx'

const Home = (props) => (<div >

  <nav className='navbar navbar-inverse navbar-fixed-top'>
    <div className='container'>
      <div className='navbar-header'>
        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
          <span className='icon-bar' />
          <span className='icon-bar' />
          <span className='icon-bar' />
        </button>
        <ul className='navbar-nav mr-auto nav '>
          <li>  <a herf='#'>Main</a></li>
          <li ><a href='#About'>AboutUs</a></li>
          <li><a href='#Contact' >Contact</a></li>
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
                <a href="/signup" className='text-light '>SignUp </a>
              </li>
              <Route path='/login' component={Login}   />
                <Route path='/signup' component={Signup}/>
            </ul>
          </Router>
        </form>
      </div>
    </div>
  </nav>
  
</div>
)
export default Home
