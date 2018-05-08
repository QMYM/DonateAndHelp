import React from 'react'
import $ from 'jquery'
import axios from 'axios'


class Campaign extends React.Component {

	constructor (props) {
    super(props)
    this.state = {
      campaignName: '',
      description: '',
      amount: '',
      beneficiaryName: '',
      image: ''
    }
    
    this.onChange = this.onChange.bind(this);
    this.onClick = this.submit.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
 }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  submit (username, email, password, confirmPassword) { 
  	
   };

    render(){

     return (
      <div>
      <label>Campain Name</label>
      <input type="text" onChange={this.onChange} />
      <label>Campain Description</label>
      <input type="text" onChange={this.onChange} />
      <label>Amount</label>
      <input type="text" onChange={this.onChange} />
      <label>Beneficiary Name</label>
      <input type="text" onChange={this.onChange} />
      <label>Image</label>
      <input type="file" onChange={this.onChangeImage} />
       <button onClick={
        () => this.submit(this.state.campaignName, this.state.description, this.state.amount , this.state.beneficiaryName)
      } > Submit </button>
      </div>

      )


    }


};