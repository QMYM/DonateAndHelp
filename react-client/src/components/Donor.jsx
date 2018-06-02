// This is the home page of the donor after logging in
import React from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Cards from 'react-credit-cards'
import {Well} from 'react-bootstrap'

import DonorProfile from './Donor_Profile.jsx'
import SearchDonor from './Search_Donor.jsx'
import DonorCampaign from './Donor_Campaign.jsx'
import DonorMessage from './Donor_Message.jsx'

function searching (term) {
  return function (x) {
    return x.campaignName.toLowerCase().includes(term.toLowerCase())
  }
}

class Donor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      campHealth: [],
      campSchool: [],
      campProfit: [],
      amount: '',
      term: '',
      user: '',

    }
    this.logout = this.logout.bind(this)
    this.search = this.search.bind(this)
    this.user = this.user.bind(this)
    this.handlechangeAmount = this.handlechangeAmount.bind(this)
  }

  search (e) {
    this.setState({term: e.target.value})
  }

  logout () {
    axios.get('/logout')
      .then(function (res) {
        console.log('ea eshe ')
        window.location.href = '/'
      }).catch(function (err) {
        console.log('logout err ', err)
      })
  }

  componentDidMount () { // Retrieve the beneficiary campagins in the home page when the home page is loaded
    var x = this
    axios.get('/companyCam')
      .then(function (res) {
        var healthArr = []
        var schoolArr = []
        var profitArr = []
        for(var i=0;i<res.data.length;i++){
          if(res.data[i].category ==="Medical & Health"){
            healthArr.push(res.data[i])
        x.setState({campHealth: healthArr})
          }
          if(res.data[i].category === 'School & Education'){
            schoolArr.push(res.data[i])
         x.setState({campSchool : schoolArr})   
        }
        if(res.data[i].category === 'Non Profit & Charity'){
          profitArr.push(res.data[i])
          x.setState({campProfit : profitArr})
        }
          }
      }).catch(function (err) {
        console.log(err)
      })
  }

  handlechangeAmount (evt) { // change the state for the input text
    var amount = evt.target.value
    this.setState({
      amount: amount
    })
  };

  submitDonate (amount) { // Donate for the beneficary campagin rendered in the home page
    if(amount.length !== 0){
    axios.post('/editAmount', {amount: amount, user: this.state.user })
      .then(function (res) {
      if(res.status === 202){
        alert("The donation has been completed!")
      }else{
        alert('Thanks For Donation')
        window.location.reload()
      }
      })
      .catch(function (err) {
        alert('the amount is so high')
      })
    }else{
      alert("Enter the amount")
    }
  }

  user (name) {
    this.setState({user: name})
  }

  render () {
    return (
      <div >
        <nav className='navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top navbar-defaul'>
          <a href='#' />
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto' />
            <ul className='navbar-nav mr-auto nav '>
              <li><a href='/donor'>Home</a></li>
              <li><a href='/Donor_Campaign'>Donation</a></li>
            </ul>
            <form className='form-inline my-2 my-lg-0'>
              <Router>
                <ul className='nav navbar-nav navbar-right ' >
                  {/* } <li> <a href='/searchD' className='icon-bar' >Search</a> </li> */}
                  <li> <a href='/searchD' className='icon-bar' >Search</a> </li>
                  <li> <a href='/Donor_Message' className='icon-bar' to='/Donor_Message'>Message</a> </li>
                  <li> <a href='/Donor_Profile' className='icon-bar' to='/Donor_Profile'>Profile</a> </li>
                  <li> <a href='#'onClick={this.logout} className='icon-bar' to='/logout'>Logout</a> </li>
                  <li><a /></li>
                  <Route path='/Donor_Message' component={DonorMessage} />
                  <Route path='/Donor_Campaign' component={DonorCampaign} />
                  <Route path='/Donor_Profile' component={DonorProfile} />
                  <Route path='/searchD' component={SearchDonor} />
                </ul>
              </Router>
              <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' onChange={this.search} value={this.state.term} />
              <button className='btn btn-outline-success my-2 my-sm-0 w3-bar-item w3-button w3-hide-small w3-right w3-hover-red' type='submit'> <i className='fa fa-search' />Search</button>
            </form>
          </div>
        </nav>

        <div className='container-fluid'>
        <Well>  
         <div className='container'>
          <div className='user-profile'>
            <div className='row'>
                 <div className='profile-info-right'>
                 <h3>Category </h3>
                  <ul className='nav nav-pills nav-pills-custom-minimal custom-minimal-bottom'>
                    <li className='active'><a href='#School' data-toggle='tab'>School & Education </a></li>
                    <li><a href='#Medical' data-toggle='tab'>Medical & Health </a></li>
                    <li><a href='#profit' data-toggle='tab'>Non Profit & Charity</a></li>
                  </ul>
                  <div className='tab-content'>
                    <div className='tab-pane fade in active' id='School'>
                       <div id='pricing' className='container-fluid'>
            <div className='row slideanim'>
              {this.state.campSchool.filter(searching(this.state.term)).map(item =>
                <div key={item._id}>
                  <div className=' col-xs-12'>
                    <div className='panel panel-default text-center'>
                      <div className='panel-heading'>
                        <h1>{item.campaignName}</h1>
                      </div>
                      <div className='panel-body'>
                        <h2 >From : {item.username}</h2>
                        <img alt='Profile' style={{width: '300px'}} src={item.campaignImage || 'https://www.arabamerica.com/wp-content/themes/arabamerica/assets/img/thumbnail-default.jpg '} />
                      </div>
                      <p> {item.campaignDescription}</p>
                      <div className='panel-footer'>
                        <h3>{item.campaignAmount}</h3><h3>JOD</h3>
                        <h3>{item.category}</h3>
                        <button type='button' className='btn btn-info btn-lg'  data-toggle='modal' data-target='#myModal' onClick={() => this.user(item._id)}>Donate</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          </div>
                    <div className='tab-pane fade' id='Medical'>
              <div id='pricing' className='container-fluid'>
            <div className='row slideanim'>
              {this.state.campHealth.filter(searching(this.state.term)).map(item =>
                <div key={item._id}>
                  <div className=' col-xs-12'>
                    <div className='panel panel-default text-center'>
                      <div className='panel-heading'>
                        <h1>{item.campaignName}</h1>
                      </div>
                      <div className='panel-body'>
                        <h2 >From : {item.username}</h2>
                        <img alt='Profile' style={{width: '300px'}} src={item.campaignImage || 'https://www.arabamerica.com/wp-content/themes/arabamerica/assets/img/thumbnail-default.jpg '} />
                      </div>
                      <p> {item.campaignDescription}</p>
                      <div className='panel-footer'>
                        <h3>{item.campaignAmount}</h3><h3>JOD</h3>
                        <h3>{item.category}</h3>
                        <button type='button' className='btn btn-info btn-lg'  data-toggle='modal' data-target='#myModal' onClick={() => this.user(item._id)}>Donate</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          </div>
                    <div className='tab-pane fade' id='profit'>
              <div id='pricing' className='container-fluid'>
            <div className='row slideanim'>
              {this.state.campProfit.filter(searching(this.state.term)).map(item =>
                <div key={item._id}>
                  <div className=' col-xs-12'>
                    <div className='panel panel-default text-center'>
                      <div className='panel-heading'>
                        <h1>{item.campaignName}</h1>
                      </div>
                      <div className='panel-body'>
                        <h2 >From : {item.username}</h2>
                        <img alt='Profile' style={{width: '300px'}} src={item.campaignImage || 'https://www.arabamerica.com/wp-content/themes/arabamerica/assets/img/thumbnail-default.jpg '} />
                      </div>
                      <p> {item.campaignDescription}</p>
                      <div className='panel-footer'>
                        <h3>{item.campaignAmount}</h3><h3>JOD</h3>
                        <h3>{item.category}</h3>
                        <button type='button' className='btn btn-info btn-lg'  data-toggle='modal' data-target='#myModal' onClick={() => this.user(item._id)}>Donate</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          </div>
          </div>
          </div>
          </div>

                    </div>
                    </div>
       
        </Well>

          <div className='modal fade' id='myModal' role='dialog'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h4 className='modal-title'>Your Donation Will Make A Difference</h4>
                  <button type='button' className='close' data-dismiss='modal'>&times;</button>
                </div>
                <div className='modal-body'>
                  <p>ENTER YOUR AMOUNT</p>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>$</span>
                    </div>
                    <input type='number' className='form-control' aria-label='Amount (to the nearest dollar)'
                      onChange={
                        this.handlechangeAmount
                      } />
                    <div className='input-group-append'>
                      <span className='input-group-text'>.JOD</span>
                    </div>
                  </div>
                  <div className='card' style={{width: '30rem'}}>
                    <img className='card-img-top' src='https://images-na.ssl-images-amazon.com/images/I/51yXB%2BW5RcL.jpg' alt='Card image cap' />
                    <div className='card-body'>

                      <input type='number' className='form-control' placeholder='Card Number' />
                      <input type='number' className='form-control' placeholder='Zip Code' />

                    </div>
                  </div>
                </div>
                <div className='modal-footer'>
                  <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
                  <button type='button' className='btn btn-default' data-dismiss='modal'  onClick={() => this.submitDonate(this.state.amount)}>Donate</button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default Donor
