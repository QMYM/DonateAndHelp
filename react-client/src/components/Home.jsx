// This is the welcoming home page that any user can navigate before logging in
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
import {Button, Navbar} from 'react-bootstrap'

import Signup from './Signup.jsx'
import Login from './Login.jsx'
import TheApp from './TheApp.jsx'

class Home extends React.Component {
constructor (props) {
    super(props)
    this.state = {
      value:'',
      
    }
    this.onChange = this.onChange.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
    this.sendMessageForDuraidi = this.sendMessageForDuraidi.bind(this)
   this.sendMessageForYussur = this.sendMessageForYussur.bind(this)
   this.sendMessageForMais = this.sendMessageForMais.bind(this)
  }

  onChange(e){
    this.setState({
      value:e.target.value
    })
  }
  sendMessageForMais(){
 axios.post("/serveiceSmsMais", {text:this.state.value}).then((res)=>{
            alert("your message has been send")
              window.location.reload()
          }).catch((err)=>{
            console.log(err)
          })
  }


  sendMessageForYussur(){
 axios.post("/serveiceSmsYussur", {text:this.state.value}).then((res)=>{
            alert("your message has been send")
              window.location.reload()
          }).catch((err)=>{
            console.log(err)
          })
  }




 sendMessageForDuraidi(){
           axios.post("/serveiceSmsDuraidi", {text:this.state.value}).then((res)=>{
            alert("your message has been send")
              window.location.reload()
          }).catch((err)=>{
            console.log(err)
          })
      }

      sendMessage(){
          axios.post("/serveiceSms", {text:this.state.value}).then((res)=>{
            alert("your message has been send")
              window.location.reload()
          }).catch((err)=>{
            console.log(err)
          })
 }

render(){
return(
<div >


  <div className="modal fade" id="Mohammed" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Mohammed</h4>
        </div>
        <div className="modal-body">
         <input type = "text" placeholder="type your text" onChange ={this.onChange}/>
          <button onClick={this.sendMessageForDuraidi}>Send</button>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>

  <div className="modal fade" id="Qays" role="dialog2">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Qays</h4>
        </div>
        <div className="modal-body">
          <input type = "text" placeholder="type your text" onChange ={this.onChange}/>
          <button onClick={this.sendMessage}>Send</button>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="Mais" role="dialog2">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Mais</h4>
        </div>
        <div className="modal-body">
           <input type = "text" placeholder="type your text" onChange ={this.onChange}/>
          <button onClick={this.sendMessageForMais}>Send</button>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
    <div className="modal fade" id="Yussur" role="dialog2">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Yussur</h4>
        </div>
        <div className="modal-body">
          <input type = "text" placeholder="type your text" onChange ={this.onChange}/>
          <button onClick={this.sendMessageForYussur}>Send</button>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  <nav className='navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top navbar-defaul'>
    <a href='#' />
    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon' />
    </button>

    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav mr-auto' />
      <ul className='navbar-nav mr-auto nav '>
        <li><a href='#Home'>Main</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Contact' >Contact</a></li>
        <li><a href='/theapp' >The App</a></li>
        <Route path='/theapp' component={TheApp} />
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

  <div className='bgimg-2 w3-display-container w3-opacity-min' id='Home'>
    <div className='w3-display-middle' >
      <span className='w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity'>MY <span className='w3-hide-small'>WEBSITE</span> LOGO</span>
    </div>
  </div>

  <div className='w3-content w3-container w3-padding-64' id='About'>
    <h3 className='w3-center'>ABOUT US</h3>
    <p className='w3-center'><em>DonateAndHelp</em></p>
    <p>We founded "DonateAndHelp" to connect beneficiaries with donors in the Middle East and North Africa , as we have observed an alarming gap in the online donation software market in the region, so we set out to create the simplest solution around here. "DonateAndHelp" can build bridges between beneficiaries and donors, where beneficiaries can receive money donations online as well as donors can upload their items for donations.</p>
    <div className='w3-row'>
      <div className='w3-col m6 w3-center w3-padding-large'>
        <p><b><i className='fa fa-user w3-margin-right' /></b></p><br />
        <img src='http://blog.zealousgood.com/wp-content/uploads/2013/03/Donors.jpeg' className='w3-round w3-image w3-opacity w3-hover-opacity-off' alt='Photo of Me' width='500' height='333' />
      </div>
    </div>
  </div>

  <div className='w3-row w3-center w3-dark-grey w3-padding-16'>
    <div className='w3-quarter w3-section'>
      <span className='w3-xlarge'>14+</span><br />
  Partners
    </div>
    <div className='w3-quarter w3-section'>
      <span className='w3-xlarge'>55+</span><br />
  Projects Done
    </div>
    <div className='w3-quarter w3-section'>
      <span className='w3-xlarge'>89+</span><br />
  Happy Clients
    </div>
    <div className='w3-quarter w3-section'>
      <span className='w3-xlarge'>150+</span><br />
  Meetings
    </div>
  </div>

  <div className='bgimg-3 w3-display-container w3-opacity-min'>
    <div className='w3-display-middle'>
      <span className='w3-xxlarge w3-text-white w3-wide'>IDEA</span>
    </div>
  </div>

  <div className=' w3-container w3-padding-64' id='portfolio'>
    <h3 className='w3-center'>Meet our awesome team</h3>
    <div className='w3-row-padding w3-grayscale'>
      <div className='w3-col l3 m6 w3-margin-bottom'>
        <img src='https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/23473196_915825728566887_4239089197692234922_n.jpg?_nc_cat=0&oh=c8d8c960fe956f1573fa8072743d69f2&oe=5B8FBDE3' alt='John' style={{width: '100%'}} />
        <br />
        <br />
        <h3>Qays Trad</h3>
        <p className='w3-opacity'>CEO</p>
        <p><button className='w3-button w3-light-grey w3-block' data-toggle="modal" data-target="#Qays">Contact</button></p>
      </div>
      <div className='w3-col l3 m6 w3-margin-bottom'>
        <img src='https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/32207749_10204687882073435_1576086593419083776_n.jpg?_nc_cat=0&oh=bdede7d612bfa26c151908dc6ff63aa1&oe=5B9A74BB' alt='Jane' style={{width: '100%'}} />
        <br />
        <br />
        <h3>Mohammed Duraidi</h3>
        <p className='w3-opacity'>Software Engineer</p>
        <p><button className='w3-button w3-light-grey w3-block' data-toggle="modal" data-target="#Mohammed">Contact</button></p>
      </div>
      <div className='w3-col l3 m6 w3-margin-bottom'>
        <img src='https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/18527753_10154354095631852_7605981024395115852_n.jpg?_nc_cat=0&oh=99bda792ec1a737846eda8ad22c31edc&oe=5B8DF2C3' alt='Mike' style={{width: '100%'}} />
        <br />
        <br />
        <h3>Mais Muhtaseb</h3>
        <p className='w3-opacity'>Software Engineer</p>
        <p><button className='w3-button w3-light-grey w3-block' data-toggle="modal" data-target="#Mais">Contact</button></p>
      </div>
      <div className='w3-col l3 m6 w3-margin-bottom'>
        <img src='https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/27067119_10155568249638369_452583962590222091_n.jpg?_nc_cat=0&oh=d77b2bbfb5860f16dcf448fb1cb3dd7e&oe=5B8023B5' alt='Dan' style={{width: '100%'}} />
        <br />
        <br />
        <h3>Yussur Alani</h3>
        <p className='w3-opacity'>Software Engineer</p>
        <p><button className='w3-button w3-light-grey w3-block' data-toggle="modal" data-target="#Yussur">Contact</button></p>
      </div>
    </div>

  </div>

  <div id='modal01' className='w3-modal w3-black' >
    <span className='w3-button w3-large w3-black w3-display-topright' title='Close Modal Image'><i className='fa fa-remove' /></span>
    <div className='w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64'>
      <img id='img01' className='w3-image' />
      <p id='caption' className='w3-opacity w3-large' />
    </div>
  </div>

  <div className='homeImg w3-display-container w3-opacity-min' id='Contact'>
    <div className='w3-display-middle'>
      <span className='w3-xxlarge w3-text-white w3-wide'>CONTACT</span>
    </div>
  </div>

  <div id='contact' className='container'>
    <br />

    <h3 className='text-center'>You Can Contact With Us AnyTime </h3>
    <br />

    <div className='row'>
      <div className='col-md-4'>
        <p><span className='glyphicon glyphicon-map-marker' />Amman , Jordan</p>
        <p><span className='glyphicon glyphicon-phone' />Phone: +00 787888888</p>
        <p><span className='glyphicon glyphicon-envelope' />Email: mail@mail.com</p>
      </div>
      <div className='col-md-8'>
        <div className='row'>
          <div className='col-sm-6 form-group'>
            <input className='form-control' id='name' name='name' placeholder='Name' type='text' required />
          </div>
          <div className='col-sm-6 form-group'>
            <input className='form-control' id='email' name='email' placeholder='Email' type='email' required />
          </div>
        </div>
        <textarea className='form-control' id='comments' name='comments' placeholder='Comment' rows='5' />
        <br />
        <div className='row'>
          <div className='col-md-12 form-group'>
            <button className='btn btn-raised btn-secondary pull-right fa fa-paper-plane' type='submit'>  Send</button>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>

  <footer className='w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off'>
    <a href='#home' className='w3-button w3-light-grey'><i className='fa fa-arrow-up w3-margin-right' />To the top</a>
    <div className='w3-xlarge w3-section'>
      <ul className='collapse navbar-collapse'>
        <i className='fa fa-facebook-official w3-hover-opacity' />
        <i className='fa fa-instagram w3-hover-opacity' />
        <i className='fa fa-snapchat w3-hover-opacity' />
        <i className='fa fa-pinterest-p w3-hover-opacity' />
        <i className='fa fa-twitter w3-hover-opacity' />
        <i className='fa fa-linkedin w3-hover-opacity' />
      </ul>
    </div>
    <p>Powered by <a href='https://www.w3schools.com/w3css/default.asp' title='W3.CSS' target='_blank' className='w3-hover-text-green'>w3.css</a></p>
  </footer>
                                                                                                     
</div>


  )  
}
}



export default Home
