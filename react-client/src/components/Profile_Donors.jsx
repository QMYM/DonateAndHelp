import React from 'react'
import $ from 'jquery'
import axios from 'axios'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // image:'',
      name:'',
      contactNum:'',
      description:'',
      address:''
    }
 this.onChange=this.onChange.bind(this);

  }

onChange(e){
  this.setState({
    [e.target.name]:e.target.value
  })
}

submit(name,contactNum,description,address){
    axios.post('/profile_donor', {
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


  render () {
    return (
      <div>
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

export default Profile