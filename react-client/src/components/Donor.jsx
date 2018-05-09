import React from 'react'
import $ from 'jquery'
import axios from 'axios'

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
      <Route path='/profile' component={Profile}/>
      </ul>
      </Router>
      </form>
            </div>
          </div>
        </nav>

        <nav className="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding" style={{zIndex:3 , width:100 }} id="mySidebar"><br/>
  <a href="javascript:void(0)" onclick="w3_close()" className="w3-button w3-hide-large w3-display-topleft" >Close Menu</a>
  <div className="w3-container">
    <h3 className="w3-padding-64"><b>Company<br/>Name</b></h3>
  </div>
  <div className="w3-bar-block">
    <a href="#" onclick="w3_close()" className="w3-bar-item w3-button w3-hover-white">Home</a> 
    <a href="#showcase" onclick="w3_close()" className="w3-bar-item w3-button w3-hover-white">Showcase</a> 
    <a href="#services" onclick="w3_close()" className="w3-bar-item w3-button w3-hover-white">Services</a> 
    <a href="#designers" onclick="w3_close()" className="w3-bar-item w3-button w3-hover-white">Designers</a> 
    <a href="#packages" onclick="w3_close()" className="w3-bar-item w3-button w3-hover-white">Packages</a> 
    <a href="#contact" onclick="w3_close()" className="w3-bar-item w3-button w3-hover-white">Contact</a>
  </div>
</nav>

<header className="w3-container w3-top w3-hide-large w3-red w3-xlarge w3-padding">
  <a href="javascript:void(0)" className="w3-button w3-red w3-margin-right" onclick="w3_open()">☰</a>
  <span>Company Name</span>
</header>

<div className="w3-overlay w3-hide-large" onclick="w3_close()"  title="close side menu" id="myOverlay"></div>

<div className="w3-main" >

  <div className="w3-container"  id="showcase">
    <h1 className="w3-jumbo"><b>Interior Design</b></h1>
    <h1 className="w3-xxxlarge w3-text-red"><b>Showcase.</b></h1>
    <hr  className="w3-round"/>
  </div>
  
  <div className="w3-row-padding">
    <div className="w3-half">
      <img src="/w3images/kitchenconcrete.jpg" style={{width:100}} onclick="onClick(this)" alt="Concrete meets bricks"/>
      <img src="/w3images/livingroom.jpg" style={{width:100}} onclick="onClick(this)" alt="Light, white and tight scandinavian design"/>
      <img src="/w3images/diningroom.jpg" style={{width:100}} onclick="onClick(this)" alt="White walls with designer chairs"/>
    </div>

    <div className="w3-half">
      <img src="/w3images/atrium.jpg" style={{width:100}} onclick="onClick(this)" alt="Windows for the atrium"/>
      <img src="/w3images/bedroom.jpg" style={{width:100}} onclick="onClick(this)" alt="Bedroom and office in one space"/>
      <img src="/w3images/livingroom2.jpg" style={{width:100}} onclick="onClick(this)" alt="Scandinavian design"/>
    </div>
  </div>

  <div id="modal01" className="w3-modal w3-black"  onclick="this.style.display='none'">
    <span className="w3-button w3-black w3-xxlarge w3-display-topright">×</span>
    <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
      <img id="img01" className="w3-image"/>
      <p id="caption"></p>
    </div>
  </div>

  <div className="w3-container" id="services" >
    <h1 className="w3-xxxlarge w3-text-red"><b>Services.</b></h1>
    <hr  className="w3-round"/>
    <p>We are a interior design service that focus on what's best for your home and what's best for you!</p>
    <p>Some text about our services - what we do and what we offer. We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
  
  <div className="w3-container" id="designers" >
    <h1 className="w3-xxxlarge w3-text-red"><b>Designers.</b></h1>
    <hr  className="w3-round"/>
    <p>The best team in the world.</p>
    <p>We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <p><b>Our designers are thoughtfully chosen</b>:</p>
  </div>

  <div className="w3-row-padding w3-grayscale">
    <div className="w3-col m4 w3-margin-bottom">
      <div className="w3-light-grey">
        <img src="/w3images/team2.jpg" alt="John" style={{width:100}} />
        <div className="w3-container">
          <h3>John Doe</h3>
          <p className="w3-opacity">CEO & Founder</p>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
        </div>
      </div>
    </div>
    <div className="w3-col m4 w3-margin-bottom">
      <div className="w3-light-grey">
        <img src="/w3images/team1.jpg" alt="Jane" style={{width:100}}/>
        <div className="w3-container">
          <h3>Jane Doe</h3>
          <p className="w3-opacity">Designer</p>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
        </div>
      </div>
    </div>
    <div className="w3-col m4 w3-margin-bottom">
      <div className="w3-light-grey">
        <img src="/w3images/team3.jpg" alt="Mike" style={{width:100}}/>
        <div className="w3-container">
          <h3>Mike Ross</h3>
          <p className="w3-opacity">Architect</p>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="w3-container" id="packages" >
    <h1 className="w3-xxxlarge w3-text-red"><b>Packages.</b></h1>
    <hr  className="w3-round"/>
    <p>Some text our prices. Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
  </div>

  <div className="w3-row-padding">
    <div className="w3-half w3-margin-bottom">
      <ul className="w3-ul w3-light-grey w3-center">
        <li className="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
        <li className="w3-padding-16">Floorplanning</li>
        <li className="w3-padding-16">10 hours support</li>
        <li className="w3-padding-16">Photography</li>
        <li className="w3-padding-16">20 furniture discount</li>
        <li className="w3-padding-16">Good deals</li>
        <li className="w3-padding-16">
          <h2>$ 199</h2>
          <span className="w3-opacity">per room</span>
        </li>
        <li className="w3-light-grey w3-padding-24">
          <button className="w3-button w3-white w3-padding-large w3-hover-black">Sign Up</button>
        </li>
      </ul>
    </div>
        
    <div className="w3-half">
      <ul className="w3-ul w3-light-grey w3-center">
        <li className="w3-red w3-xlarge w3-padding-32">Pro</li>
        <li className="w3-padding-16">Floorplanning</li>
        <li className="w3-padding-16">50 hours support</li>
        <li className="w3-padding-16">Photography</li>
        <li className="w3-padding-16">50 furniture discount</li>
        <li className="w3-padding-16">GREAT deals</li>
        <li className="w3-padding-16">
          <h2>$ 249</h2>
          <span className="w3-opacity">per room</span>
        </li>
        <li className="w3-light-grey w3-padding-24">
          <button className="w3-button w3-red w3-padding-large w3-hover-black">Sign Up</button>
        </li>
      </ul>
    </div>
  </div>
  
  <div className="w3-container" id="contact" >
    <h1 className="w3-xxxlarge w3-text-red"><b>Contact.</b></h1>
    <hr  className="w3-round"/>
    <p>Do you want us to style your home? Fill out the form and fill me in with the details :) We love meeting new people!</p>
    <form action="/action_page.php" target="_blank">
      <div className="w3-section">
        <label>Name</label>
        <input className="w3-input w3-border" type="text" name="Name" required/>
      </div>
      <div className="w3-section">
        <label>Email</label>
        <input className="w3-input w3-border" type="text" name="Email" required/>
      </div>
      <div className="w3-section">
        <label>Message</label>
        <input className="w3-input w3-border" type="text" name="Message" required/>
      </div>
      <button type="submit" className="w3-button w3-block w3-padding-large w3-red w3-margin-bottom">Send Message</button>
    </form>  
  </div>

</div>

<div className="w3-light-grey w3-container w3-padding-32" ><p className="w3-right">Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" className="w3-hover-opacity">w3.css</a></p></div>
 

      </div>
    )
  }
}
export default Donor
