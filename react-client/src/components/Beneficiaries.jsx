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

function searching(term){
 return function(x){
   return x.username.toLowerCase().includes(term.toLowerCase())
 }
}



class Beneficiaries extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
     term:'',
     camp : []
   }
   this.search=this.search.bind(this) 
   this.logout = this.logout.bind(this)
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

  search(e){
    this.setState({term:e.target.value})
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
      <li><a href='/beneficiaries' to='/beneficiaries'>Home</a></li>
      <li><a href='/Beneficiaries_Campaign' to='/Beneficiaries_Campaign'>Campaign</a></li>
      </ul>
      </div>
      <div className='collapse navbar-collapse' id='myNavbar'>
      <form className=' '>
      <Router>
      <ul className='nav navbar-nav navbar-right ' >
      <li style={{marginTop:10}}> Search: <input type="text" placeholder="Search"
      onChange={this.search}
      value={this.state.term}
      /></li>
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
      <br/>
      <br/>
      {this.state.camp.filter(searching(this.state.term)).map( item =>
        <div>
        <div className="col-sm-4 col-xs-12">
        <div className="panel panel-default text-center">
        <div className="panel-heading">
        <h1>{item.campaignName}</h1>
        </div>
        <div className="panel-body">
        <h2>From : {item.username}</h2>
        <img  alt="Profile" style={{width:"300px"}} src = {item.campaignImage || "https://orig00.deviantart.net/3cc1/f/2012/247/1/b/meelo_facebook_default_profile_picture_by_redjanuary-d5dmoxd.jpg"} /> 

        <p> {item.campaignDescription}</p>
        </div>
        <div className="panel-footer">
        <h3>{item.campaignAmount}</h3><h3>JOD</h3>
        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Donate</button>
        </div>
        </div>      
        </div>     
        </div>
        )}
      <div className="modal fade" id="myModal" role="dialog">
      <div className="modal-dialog">
      <div className="modal-content">
      <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal">&times;</button>
      <h4 className="modal-title">Your Donation Will Make A Difference</h4>
      </div>
      <div className="modal-body">
      <p>ENTER YOUR AMOUNT</p>
      <h1>Cash💰:</h1>
      <input id="user" type="number" className="input" 
      onChange={
        this.handlechangeAmount
      }
      ref={el => this.input = el}/>
      <p>Donations made in JOD</p>
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
      <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.submitDonate}>Donate</button>
      </div>
      </div>

      </div>
      </div>

      <div className="content">
      <Route path="/Beneficiaries_Profile" render={()=><BeneficiariesProfile /> } />
      <Route path="/Message" render={()=><Message /> } />
      <Route path="/Beneficiaries_Campaign" render={()=><Beneficiaries_Campaign /> } />

      </div>


      </div>
      )
  }
}
export default Beneficiaries
