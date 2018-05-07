import React from 'react'
import $ from 'jquery'
import axios from 'axios'

class Beneficiaries extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}
	render(){
		return (
			<div>
			<nav className="navbar navbar-inverse navbar-fixed-top">
			<div className="container">
			<div className="navbar-header">
			<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>                        
			</button>
			<ul className="navbar-nav mr-auto nav ">
			<li>  <a herf ='/home'>Home</a></li>
			<li ><a href='#About'>AboutUs</a></li>
			<li><a href="#Contact" >Contact</a></li>
			</ul>
			</div>
			<div className="collapse navbar-collapse" id="myNavbar">
			<form className=" ">
			<ul className="nav navbar-nav navbar-right" >
			<li>
			<a className="icon-bar"  to="/profile">Profile</a>
			</li>
			<li>
			<a className="icon-bar"  to="/logout">Logout</a>
			</li>
			</ul>
			</form>
			</div>
			</div>
			</nav>
			
			</div>
			)
	}
}
export default Beneficiaries
