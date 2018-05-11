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
import Search_Donor from './Search_Donor.jsx'
import Campaign from './Campaign.jsx'
import Message from './Message.jsx'

class Donor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      camp :[]
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

  componentDidMount() {
    var x = this
    axios.get('/donorCam')
    .then(function (res) {
      console.log(res.data)
      x.setState({camp : res.data})  
      // const camp=res.data.results.map(obj=>{})
    }).catch(function (err) {
      console.log(err)
    })
  }



  submitDonate(){
   console.log("Donate")
 }

 render () {
 console.log(this.state.camp) 
  return (
    <div >
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
    <li ><a href='/campaign'>DODO</a></li>
    </ul>
    </div>
    <div className='collapse navbar-collapse' id='myNavbar'>
    <form className=' '>

    <Router>
    <ul className='nav navbar-nav navbar-right ' >
    <li> <a href='/searchD' className='icon-bar' >Search_Donor</a> </li>
    <li> <a href='/message' className='icon-bar' to='/message'>Message</a> </li>
    <li> <a href='/Profile_Donor' className='icon-bar' to='/Profile_Donor'>Profile_Donor</a> </li>
    <li> <a onClick={this.logout} className='icon-bar' to='/logout'>Logout</a> </li>
    <Route path='/message' component={Message} />
    <Route path='/campaign' component={Campaign} />
    <Route path='/Profile_Donor' component={Profile_Donor}/>
    <Route path='/searchD' component={Search_Donor}/>
    </ul>
    </Router>
    </form>
    </div>
    </div>
    </nav> 


    <div className="container-fluid">
    <br/>
    <br/>
    <br/>
    <br/>
    <div id="pricing" className="container-fluid">
    <div className="row slideanim">
    {this.state.camp.map( item =>
      <div>

      <div className="col-sm-4 col-xs-12">
      <div className="panel panel-default text-center">
      <div className="panel-heading">
      <h1>{item.campaignName}</h1>
      </div>
      <div className="panel-body">
      <h2>From : {item.username}</h2>

      <p> {item.campaignDescription}</p>
      </div>
      <div className="panel-footer">
      <h3>{item.campaignAmount}</h3>
      <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Donate</button>
      </div>
      </div>      
      </div>     
      </div>
      )}
    </div>
    </div>

    <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">


    <div className="modal-content">
    <div className="modal-header">
    <button type="button" className="close" data-dismiss="modal">&times;</button>
    <h4 className="modal-title">Donate</h4>
    </div>
    <div className="modal-body">
    <p>Some text in the modal.</p>
    <h1>FirstName:</h1><input type="text" />
    <h1>Cash💰:</h1><input type="text" />
    </div>
    <div className="modal-footer">
    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
    <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.submitDonate}>Donate</button>
    </div>
    </div>

    </div>
    </div>

    </div>


    </div>
    )
}
}

export default Donor;

