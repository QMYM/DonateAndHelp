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

import Search_Donor from './Search_Donor.jsx'
import Message from './Message.jsx'

class Donor_Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
     image:"",
     name:'',
     contactNum:'',
     description:'',
     address:'',
     user:'',
     email:''
   }
   this.onChange=this.onChange.bind(this);
   this.uploadPhoto=this.uploadPhoto.bind(this);

 }

 onChange(e){
  this.setState({
    [e.target.name]:e.target.value
  })
}

submit(name,contactNum,description,address){
  axios.post('/profile_company', {
      // image: this.state.image,
      name: this.state.name,
      contactNum: this.state.contactNum,
      description: this.state.description,
      address: this.state.address
    })
  .then(response => {
    console.log('profile has been updated')
        // should go to the home page from here
      }).catch(error => {
        alert('wrong in profile update')
      })
    }

  uploadPhoto(photo){  // post the photo and get the photo in the same time
   var x=this
   var file = photo.target.files[0]
   var fileReader = new FileReader();
   fileReader.readAsDataURL(file);
   fileReader.onload = function(e) {
    axios.post('/photo', {image: e.target.result})
    .then(res => {
             x.componentDidMount() // here i'm getting the photo from database
           })
    .catch(function (error) {
      console.log(error);
    });
  }
}

componentDidMount() { // this is the initial
  axios.get('/getImage')
  .then(response => {

    const posts = response['data']
     this.setState({  //changing the state to the new image that i fetch it from database
       image:posts.image
     })
     this.fetchCompanyData()

   })
  .catch(function (error) {
   console.log(error);
 });
}
fetchCompanyData(){
  var x = this
axios.get("/fetchCompanyData").then(function(res){
  console.log("alo data is here",res)
  var user = res.data.username
  var email = res.data.email
  x.setState({
    user:user,
    email:email

  })
}).catch(function(err){
 console.log("error",err)
})
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
    <li>  <a herf='/home'>Home</a></li>
    <li ><a href='/Donor_Campaign'>Campaign</a></li>
    </ul>
    </div>
    <div className='collapse navbar-collapse' id='myNavbar'>
    <form className=' '>

    <Router>
    <ul className='nav navbar-nav navbar-right ' >
    <li> <a href='/searchD' className='icon-bar' >Search</a> </li>
    <li> <a href='/message' className='icon-bar' to='/message'>Message</a> </li>
    <li> <a href='/Donor_Profile' className='icon-bar' to='/Donor_Profile'>Profile</a> </li>
    <li> <a href ="#"onClick={this.logout} className='icon-bar' to='/logout'>Logout</a> </li>
    <Route path='/message' component={Message} />
    <Route path='/searchD' component={Search_Donor}/>
    </ul>
    </Router>
    </form>
    </div>
    </div>
    </nav>   

    <span><img src = {this.state.image || "https://orig00.deviantart.net/3cc1/f/2012/247/1/b/meelo_facebook_default_profile_picture_by_redjanuary-d5dmoxd.jpg"} style={{width:"400px", height:"400px"}} /> </span>
    <form> 
    <label className="btn  btn-primary" style={{color:"black"}}>
    <input type = "file" name="image" id="photo" style={{display:"none"}} onChange={this.uploadPhoto}/>
    Choose file
    </label>
    </form>
    <h1>{this.state.user}</h1>
      <h1>{this.state.email} </h1>
    <br />
    <br />
    <label>Name:</label>
    <input type="text" name="name" onChange={this.onChange}/>
    <br/>
    <label>contactNum:</label>
    <input type="text" name="contactNum" onChange={this.onChange}/>
    <br/>
    <label>description:</label>
    <input type="text" name="description" onChange={this.onChange}/>
    <br/>
    <label>address:</label>
    <input type="text" name="address" onChange={this.onChange}/>
    <br/>
    <button onClick={()=>this.submit(this.state.name,this.state.contactNum,
      this.state.description,this.state.address)}>Submit</button>
    
    
    
    </div>
    )
}
}


export default Donor_Profile