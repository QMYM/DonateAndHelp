import React from 'react'
import $ from 'jquery'
import axios from 'axios'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
     image:"data:image/jpeg;base64,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",
      name:'',
      contactNum:'',
      description:'',
      address:''
    
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
      console.log("rbkbkbkbkb")
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
   const posts = response.data;
   console.log('qays data image', posts)
     this.setState({  //changing the state to the new image that i fetch it from database
     image:posts.image
     })
   

 })
 .catch(function (error) {
   console.log(error);
 });
}






render () {
  return (
    <div>
      <span><img src = {this.state.image} /> </span>
      <form> 
      <label className="btn  btn-primary" style={{color:"black"}}>
      <input type = "file" name="image" id="photo" style={{display:"none"}} onChange={this.uploadPhoto}/>
      Choose file
      </label>
     

      </form>

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


export default Profile