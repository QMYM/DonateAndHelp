import React from 'react'
import $ from 'jquery'
import axios from 'axios'
import {Image} from 'react-bootstrap';

class Profile_Donor extends React.Component {
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
  axios.post('/Profile_Donor', {
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
    axios.post('/photoDonor', {image: e.target.result})
    .then(res => {
    	console.log('hello Donor image', res)
             x.componentDidMount() // here i'm getting the photo from database
           })
    .catch(function (error) {
      console.log(error);
    });

  }

}

componentDidMount() { // this is the initial
  axios.get('/getImageDonor')
  .then(response => {
    this.fetchDonorData()
    const posts = response['data']
     this.setState({  //changing the state to the new image that i fetch it from database
       image:posts.image
     })


   })
  .catch(function (error) {
   console.log(error);
 });
}

fetchDonorData(){
  var x = this
  axios.get("/fetchDonorData").then(function(res){
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

render () {
  return (
    <div style={{background:"white"}} >
    <form> 
    <br/>
    <div className="container">
    <div className="profile">     

    <div className="container">
    <img  className="image-lg "  alt="Profile" src = {this.state.image || "https://orig00.deviantart.net/3cc1/f/2012/247/1/b/meelo_facebook_default_profile_picture_by_redjanuary-d5dmoxd.jpg"} /> 
  <div className="middle ">
    <div className="text ">
    <label className="btn" style={{color:"black"}}>
    <input  type = "file" name="image" id="photo" style={{display:"none"}} onChange={this.uploadPhoto}/> Update Your Image
    </label>
    </div>
  </div>
</div>
  
    <label style={{color:"black"}}>
     <div className="text-block">
  </div>

    </label>
    
    </div>
    </div> 
    </form>
    <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">


    <div className="modal-content">
    <div className="modal-header">
    <button type="button" className="close" data-dismiss="modal">&times;</button>
    <h4 className="modal-title">Donate</h4>
    </div>
    <div className="modal-body">
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
    <div className="modal-footer">
    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
    <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.submitDonate}>Donate</button>
    </div>
    </div>

    </div>
    </div>



<div className="container">
    <div className="user-profile">
        <div className="profile-header-background">

        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="profile-info-left" >
                    <div className="text-center">
            <Image circle  className="avatar "  alt="Profile image example" src = {this.state.image || "https://orig00.deviantart.net/3cc1/f/2012/247/1/b/meelo_facebook_default_profile_picture_by_redjanuary-d5dmoxd.jpg"} /> 

                        <h2>{this.state.user}</h2>
                    </div>
                    <div className="action-buttons">
                        <div className="row">
                            <div className="col-xs-6">
                                <a href="#" className="btn btn-success btn-block"><i className="fa fa-plus-round"></i> Follow</a>
                            </div>
                            <div className="col-xs-6">
                                <a href="#" className="btn btn-primary btn-block"><i className="fa fa-android-mail"></i> Message</a>
                            </div>
                        </div>
                    </div>
                    <div className="section" >
                     <div className="btn-group pull-right activity-actions">
                                    <button type="button" className="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown">
                                        <i className="fa fa-edit"></i>
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-right" role="menu">
                                        <li><a data-toggle="modal" data-target="#myModal">Edit</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#">Get</a></li>
                                    </ul>
                                </div>
                        <h3>About Me</h3>
                        <p>Some Discription</p>
                    </div>
                    <div className="section">
                        <h3>Statistics</h3>
                        <p className="  fa fa-address-card-o"> {this.state.email}</p><br/>
                        <p className="fa fa-phone"> contactNum</p><br/>
                        <p className="  fa fa-automobile"> address</p>
                    </div> 
                    <div className="section">
                        <h3>Social</h3>
                        <ul className="list-unstyled list-social">
                            <li><a href="#"><i className="fa fa-twitter"></i> </a></li>
                            <li><a href="#"><i className="fa fa-facebook"></i> </a></li>
                            <li><a href="#"><i className="fa fa-dribbble"></i> </a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i> </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="profile-info-right">
                    <ul className="nav nav-pills nav-pills-custom-minimal custom-minimal-bottom">
                        <li className="active"><a href="#activities" data-toggle="tab">ACTIVITIES</a></li>
                        <li><a href="#following" data-toggle="tab">FOLLOWING</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade in active" id="activities">
                           
                  
                            <div className="media activity-item">
                                <a href="#" className="pull-left">
                                    <img src="http://bootdey.com/img/Content/avatar/avatar3.png" alt="Avatar" className="media-object avatar"/>
                                </a>
                                <div className="media-body">
                                    <p className="activity-title"><a href="#">Michael</a> posted something for <a href="#">{this.state.user}</a> <small className="text-muted">- 1h ago</small></p>
                                    <small className="text-muted">Today 07:23 am - 02.05.2014</small>
                                    <div className="activity-attachment">
                                        <div className="well well-sm">
                                            Professionally evolve corporate services without ethical leadership. Proactively re-engineer client-focused infrastructures before alternative potentialities. Competently predominate just in time e-tailers for leveraged solutions. Intrinsicly initiate end-to-end collaboration and idea-sharing after 24/365 ROI. Rapidiously.
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-group pull-right activity-actions">
                                    <button type="button" className="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown">
                                        <i className="fa fa-th"></i>
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-right" role="menu">
                                        <li><a href="#">Delete</a></li>
                                        <li><a href="#">Edit</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#">Update</a></li>
                                    </ul>
                                </div>
                            </div>
                         
                            <div className="media activity-item">
                                <a href="#" className="pull-left">
                                    <img src="http://bootdey.com/img/Content/avatar/avatar6.png" alt="Avatar" className="media-object avatar"/>
                                </a>
                                <div className="media-body">
                                    <p className="activity-title"><a href="#">{this.state.user}</a> has changed his profile picture <small className="text-muted">- 2 days ago</small></p>
                                    <small className="text-muted">2 days ago 05:42 pm - 30.04.2014</small>
                                    <div className="activity-attachment">
                                        <a href="#" className="thumbnail">
                                            <img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="Uploaded photo"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="btn-group pull-right activity-actions">
                                    <button type="button" className="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown">
                                        <i className="fa fa-th"></i>
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-right" role="menu">
                                        <li><a href="#">I don't want to see this</a></li>
                                        <li><a href="#">Unfollow {this.state.user}</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#">Get Notification</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="button" className="btn btn-default center-block"><i className="fa fa-refresh"></i> Load more activities</button>
                        </div>
                        <div className="tab-pane fade" id="following">
                            <div className="media user-following">
                                <img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="User Avatar" className="media-object pull-left"/>
                                <div className="media-body">
                                    <a href="#">Stella<br/><span className="text-muted username">@stella</span></a>
                                    <button type="button" className="btn btn-sm btn-danger pull-right"><i className="fa fa-close-round"></i> Unfollow</button>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


   
    </div>
    )
}
}


export default Profile_Donor
