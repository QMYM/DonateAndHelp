import React from 'react'
import $ from 'jquery'
import axios from 'axios'


class Campaign extends React.Component {

	constructor (props) {
    super(props)
    this.state = {
      campaignName: '',
      campaignDescription: '',
      campaignAmount: '',
      campaignImage: ''
    }
    
    this.onChange = this.onChange.bind(this);
    this.submitCampaign = this.submitCampaign.bind(this);
    this.uploadPhotoCampaign = this.uploadPhotoCampaign.bind(this);
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  submitCampaign(campaignName,campaignDescription,campaignAmount){
  axios.post('/campaignInfo', {
      campaignName: this.state.campaignName,
      campaignDescription: this.state.campaignDescription,
      campaignAmount: this.state.campaignAmount
    })
  .then(response => {
    console.log('campaign has been posted!')
      }).catch(error => {
        alert('wrong in posting a campaign!')
      })
    }

  uploadPhotoCampaign(photo){  
   var x=this;
   var file = photo.target.files[0];
   var fileReader = new FileReader();
   fileReader.readAsDataURL(file);
   fileReader.onload = function(e) {
    axios.post('/imageCampaign', {campaignImage: e.target.result})
    .then(res => {
             console.log("Image campaign has been uploaded!");
           })
    .catch(function (error) {
      console.log(error);
    });
   
    

  }
}

  render(){

   return (
    <div>
    <span><img src = {this.state.campaignImage} /> </span>
    <label>Campain Name</label>
    <input type="text" name="campaignName" onChange={this.onChange} />
    <br/>
    <label>Campain Description</label>
    <input type="text" name="campaignDescription" onChange={this.onChange} />
    <br/>
    <label>Amount</label>
    <input type="text" name="campaignAmount" onChange={this.onChange} />
    <br/>
    <label>Beneficiary Name</label>
    <input type="text" onChange={this.onChange} />
    <br/>
    <form>
    <input type="file" name="image" onChange={this.uploadPhotoCampaign}/>
    Choose image
    </form>
    <br/>
    <button onClick={
      () => this.submitCampaign(this.state.campaignName, this.state.description, this.state.amount , this.state.beneficiaryName)
    } > Submit </button>
    </div>

    )

 }

};

export default Campaign;