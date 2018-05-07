import React from 'react'
import $ from 'jquery'

import axios from 'axios'

import Signup from './Signup.jsx'
import Login from './Login.jsx'

const Home = (props) => (<div >
	    <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
    <div className="navbar-header">
    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>                        
    </button>
    <ul className="navbar-nav mr-auto nav ">
    <li>  <a herf ='#'>Main</a></li>
    <li ><a href='#About'>AboutUs</a></li>
    <li><a href="#Contact" >Contact</a></li>
    </ul>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
    <form className=" ">
  <ul className="nav navbar-nav navbar-right" >
  <li><a herf ='#' className="icon-bar"   >Signup</a></li>

 
  <li><a herf ='#' className="text-light " >Login</a></li>
  
  </ul>
  </form>
  </div>
  </div>
  </nav>
  <button > Signup </button> <button > login </button>
   </div>
)
export default Home
