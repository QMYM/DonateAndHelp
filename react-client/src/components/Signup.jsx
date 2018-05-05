import React from 'react';
import $ from 'jquery';


class Signup extends React.Component{
	constructor(props){
	super(props)
		this.state={
	    email: "",
        password: "",
        username:""
    };
		this.onChange=this.onChange.bind(this)
		this.submit=this.submit.bind(this)
	}
onChange(e){
	this.setState({
		[e.target.name]:e.target.value
	})
	
}
submit(email , username , password){
	$.ajax({
		type : 'POST',
		url : '/user',
		data :{
			email : email , 
			password : password , 
			username : username
		},
		success : (data)=>{
			console.log('aaa' , data)
		}
	})
}




render(){
return(
<div>
<h2>Name:</h2>
<input type ='text' name='username' onChange={this.onChange}/>
<h2>Email:</h2>

<input type ='text' name='email' onChange={this.onChange}/>
<h2>Password:</h2>
<input type ='password' name='password' onChange={this.onChange}/>

<button onClick={()=>this.submit(this.state.username , this.state.password , this.state.email)}>Signup</button>
</div>
	)
}

}

export default Signup;