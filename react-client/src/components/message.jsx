import React from 'react'
import $ from 'jquery'
import axios from 'axios'

class Message extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM4S38P0ARNHrGJmB6g_SWarEbJgyipJ4rIDM3rwyzCcuH0Gnq",
      user:'',
      text:'' , 
      messages : [],
      sessionUser:'',
      items:[] 
    }
    this.sendMessage = this.sendMessage.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
  var x = this
    x.user()
   axios.get('/recieveMessage')
   .then(function(response) {
    var mes = []
     for (var i = 0; i < response.data.length; i++) {
     if(response.data[i].reciver === x.state.sessionUser){
      mes.push(response.data[i])
    x.setState({messages : mes})
    
     }
      
     }
   })
   // this.getPhotoForMessages()

  }
  // getPhotoForMessages(){
  //   var x = this
  //   axios.get("/getPhotoForMessages").then(function(res){
  //     var arr =[]
  //     for(var i = 0; i< res.data.length; i++){
  //       if(res.data[i].image !== undefined){
  //         arr.push(res.data[i].image)
  //          x.setState({items : arr})
  //          console.log("my image",x.state.items)
  //       }

  //     }


  //   }).catch(function(err){
  //     console.log("error",err)
  //   })
  // }
  user (){
    var x = this;
    axios.get("/sessionName").then(function (res){
      x.setState({sessionUser : res.data})
    }).catch(function(err){
      console.log("error",err)
    })
  }


  onChange(e){
    
    this.setState({
   [e.target.name] : e.target.value
    })
  }
  sendMessage(to , text){
    var x = this
    axios.post('/sendMessage' , {user:to , text:text})
    .then (function (res) {
      // console.log("Messs" , res)
    }).catch (function (err) {
      console.log("Err Mess" , err)
    })
  }
  render () {
     console.log("mess" ,this.state.messages)

    return (
      <div>
      <nav className="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding " style={{ width:250 , zIndex:3  }} id="mySidebar">
    
  <a href="javascript:void(0)" title="Close Sidemenu" 

  className="w3-bar-item w3-button w3-hide-large w3-large" >Close <i className="fa fa-remove"></i></a>
  <a href="javascript:void(0)" className="w3-bar-item w3-button w3-dark-grey w3-button w3-hover-black w3-left-align"  data-toggle="modal" data-target="#myModal">New Message <i className="w3-padding fa fa-pencil"></i></a>
  <a id="myBtn"  href="javascript:void(0)" className="w3-bar-item w3-button"><i className="fa fa-inbox w3-margin-right"></i>Inbox (3)<i className="fa fa-caret-down w3-margin-left"></i></a>
  <div id="Demo1" className="w3-hide w3-animate-left">
    <a href="javascript:void(0)" className="w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey" id="firstTab">
      <div className="w3-container">
        <img className="w3-round w3-margin-right" src={this.state.image} /><span className="w3-opacity w3-large">Borge Refsnes</span>
        <h6>Subject: Remember Me</h6>
        <p>Hello, i just wanted to let you know that i'll be home at...</p>
      </div>
    </a>
     <a href="javascript:void(0)" className="w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey">
      <div className="w3-container">
        <img className="w3-round w3-margin-right" src={this.state.image} /><span className="w3-opacity w3-large">Jane Doe</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
    </a>
    <a href="javascript:void(0)" className="w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey">
      <div className="w3-container">
        <img className="w3-round w3-margin-right" src={this.state.image} /><span className="w3-opacity w3-large">John Doe</span>
        <p>Welcome!</p>
      </div>
    </a>
  </div>
  <a href="#" className="w3-bar-item w3-button"><i className="fa fa-paper-plane w3-margin-right"></i>Sent</a>
  <a href="#" className="w3-bar-item w3-button"><i className="fa fa-hourglass-end w3-margin-right"></i>Drafts</a>
  <a href="#" className="w3-bar-item w3-button"><i className="fa fa-trash w3-margin-right"></i>Trash</a>
</nav>
<div id="id01" className="modal fade" id="myModal" >
  <div className="w3-modal-content w3-animate-zoom" >
    <div className="w3-container w3-padding w3-red" >
       <span 
       className="w3-button w3-red w3-right w3-xxlarge" data-dismiss="modal"><i className="fa fa-remove"></i></span>
      <h2>Send Mail</h2>
    </div>
    <div className="w3-panel">
      <label>To</label>
      <input className="w3-input w3-border w3-margin-bottom" type="text"  onChange={this.onChange} name = "user"/>
      <label>Subject</label>
      <input className="w3-input w3-border w3-margin-bottom" type="text"  onChange={this.onChange} name = "text" placeholder="What's on your mind?"/>
      <div className="w3-section">
        <a className="w3-button w3-red" data-dismiss="modal">Cancel  <i className="fa fa-remove"></i></a>
        <button onClick={()=>this.sendMessage(this.state.user , this.state.text)}> sendQays </button>
        <a className="w3-button w3-light-grey w3-right">Send  <i className="fa fa-paper-plane"></i></a> 
      </div>    
    </div>
  </div>
</div>

<div className="w3-overlay w3-hide-large w3-animate-opacity"  title="Close Sidemenu" id="myOverlay"></div>

<div className="w3-main" >
<i className="fa fa-bars w3-button w3-white w3-hide-large w3-xlarge w3-margin-left w3-margin-top" ></i>
<a href="javascript:void(0)" className="w3-hide-large w3-red w3-button w3-right w3-margin-top w3-margin-right" ><i className="fa fa-pencil"></i></a>
<div style = {{marginLeft:300}}>
  {this.state.messages.map(item => 

    <div>
<div id="Qays" className="w3-container person" >
  <br/>
  <img className="w3-round  w3-animate-top" src={this.state.image}/>
  <h5 className="w3-opacity">Subject: Remember Me</h5>
  <h4><i className="fa fa-clock-o"></i> From {item.sender}, Sep 27, 2015.</h4>
  <p>{item.message}</p>
  <p>Best Regards, <br/>Borge Refsnes</p>
  <a className="w3-button w3-light-grey" href="#">Reply<i className="w3-margin-left fa fa-mail-reply"></i></a>
  <a className="w3-button w3-light-grey" href="#">Forward<i className="w3-margin-left fa fa-arrow-right"></i></a>
  <hr/>
</div>
</div>
    )}




     
</div>
</div>
  

      </div>
    )
  }
}

export default Message
