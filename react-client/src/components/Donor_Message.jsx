import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route} from 'react-router-dom';
import ReactLoading from 'react-loading';

import Donor_Profile from './Donor_Profile.jsx';
import Search_Donor from './Search_Donor.jsx';
import Donor_Campaign from './Donor_Campaign.jsx';

class Message extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            image: 'https://orig00.deviantart.net/1471/f/2013/110/f/a/facebook_default_pic__2____copy_by_neuronboy42-d62cgrr.jpg',
            user: '',
            text: '',
            messages: [],
            sessionUser: '',
            items: [],
            rightMes: [],
            rightMes2: [],
            reciver: [],
            senderMess: [],
            messageForDOM: '',
            loading: true

        };
        this.sendMessage = this.sendMessage.bind(this);
        this.onChange = this.onChange.bind(this);
        this.openMail = this.openMail.bind(this);
        this.remove = this.remove.bind(this);
        this.close = this.close.bind(this);
        this.delete = this.delete.bind(this);
    }

    remove (user, id) { // Remove a single message
        axios.post('/removeMsg', {user: user, id: id})
            .then(function () {
                window.location.reload();
            }).catch(function (err) {
                throw err;
            });
    }

    componentDidMount () { // It will retrieve the history messages information when the messages page is loaded
        setTimeout(() => this.setState({ loading: false }), 1500);
        this.getPhotoForMessages();
        let x = this;
        x.user();
        axios.get('/recieveMessage')
            .then(function (response) {
                let mes = [];
                let mess = [];
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].reciver === x.state.sessionUser) {
                        mes.push(response.data[i]);
                        x.setState({messages: mes});
                    }
                    if (response.data[i].sender === x.state.sessionUser) {
                        mess.push(response.data[i]);
                        x.setState({senderMess: mess});
                    }
                }
            });
    }

    getPhotoForMessages () {
        let x = this;
        let arr = [];
        let test = [];
        axios.get('/getPhotoForMessages').then(function (res) {
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].userInfo.length !== 0) {
                    if (!arr.includes(res.data[i].userInfo[0].username) && res.data[i].userInfo[0].username !== x.state.sessionUser && res.data[i].reciver === x.state.sessionUser) {
                        test.push(res.data[i].userInfo);
                        arr.push(res.data[i].userInfo[0].username);
                    }
                }
                if (res.data[i].userRole.length !== 0) {
                    if (!arr.includes(res.data[i].userRole[0].username) && res.data[i].userRole[0].username !== x.state.sessionUser && res.data[i].reciver === x.state.sessionUser) {
                        test.push(res.data[i].userRole);
                        arr.push(res.data[i].userRole[0].username);
                    }
                }
            }
            let merged = [].concat.apply([], test);
            x.setState({reciver: merged});
        }).catch(function (err) {
            throw err;
        });
    }

    // This will retrieve the username of the user who is currently logged in
    user () { 
        let x = this;
        axios.get('/sessionName').then(function (res) {
            x.setState({sessionUser: res.data});
        }).catch(function (err) {
            throw err;
        });
    }

    onChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    sendMessage (to, text) {
        let x = this;
        axios.post('/sendMessage', {user: to, text: text})
            .then(function () {
                x.setState({
                    messageForDOM: ' Your Message has been sent'
                });
                setTimeout(function () {
                    window.location.reload();
                }, 1000);     
            }).catch(function () {
                x.setState({
                    messageForDOM: ' User Not Found!'
                });
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            });
    }

    openMail (personName) { // Create a new message
        let i;
        let arr = [];
        let arr2 = [];
        let x = $('.person');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        x = $('.test');
        for (i = 0; i < x.length; i++) {
            x[i].className = x[i].className.replace(' w3-red', '');
        }
        for (let i = 0; i < this.state.messages.length; i++) {
            if (this.state.messages[i].sender === personName) {
                arr.push(this.state.messages[i]);
                document.getElementById(personName).style.display = 'block';
            }
        }
        for (let i = 0; i < this.state.senderMess.length; i++) {
            if (this.state.senderMess[i].reciver === personName) {
                arr2.push(this.state.senderMess[i]);
            }
        }
        this.setState({rightMes: arr});
        this.setState({rightMes2: arr2});
    }

    close () {
        document.getElementById('closeMenShanAlllah').style.display = 'none'; // Close the message window
    }

    logout () {
        axios.get('/logout')
            .then(function () {
                window.location.href = '/';
            }).catch(function (err) {
                throw err;
            });
    }

    delete (delteUserName) { // Delete all messages
        let x = this;
        axios.post('/deleteAllMessages', {user: delteUserName}).then(function () {
            x.setState({
                messageForDOM: ' Your Messages has been Deleted!'
            });
            setTimeout(function () {
                window.location.reload();
            }, 1000);
        }).catch(function (err) {
            throw err;
        });
    }

    render () {
        const { loading } = this.state;

        if (loading) { // if your component doesn't have to wait for an async action, remove this block
            return (
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <ReactLoading type='spokes' color='black' height={500} width={500} />
                        </div>
                    </div>
                </div>
            );
        } else {
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
                                <li><a href='/Donor_Campaign'>Campaign</a></li>
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
                                        <Route path='/Donor_Campaign' component={Donor_Campaign} />
                                        <Route path='/Donor_Profile' component={Donor_Profile} />
                                        <Route path='/searchD' component={Search_Donor} />
                                    </ul>
                                </Router>
                                <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' onChange={this.search} value={this.state.term} />
                                <button className='btn btn-outline-success my-2 my-sm-0 w3-bar-item w3-button w3-hide-small w3-right w3-hover-red' type='submit'> <i className='fa fa-search' />Search</button>
                            </form>
                        </div>
                    </nav>>

                    <br />
                    <br />
                    <a href='javascript:void(0)' className='w3-hide-large w3-red w3-button w3-right w3-margin-top w3-margin-right' data-toggle='modal' data-target='#myModal' ><i className='fa fa-pencil' /></a>

                    <nav className='w3-sidebar w3-dark-grey w3-collapse w3-top w3-large w3-padding ' style={{ width: 250, zIndex: 3, top: 65 }} id='mySidebar' >

                        <a href='javascript:void(0)' title='Close Sidemenu'

                            className='w3-bar-item w3-button w3-hide-large w3-large'>Close <i className='fa fa-remove' /></a>
                        <a href='javascript:void(0)' className='w3-bar-item w3-button w3-dark-grey w3-button w3-hover-black w3-left-align' data-toggle='modal' data-target='#myModal'>New Message <i className='w3-padding fa fa-pencil' /></a>
                        {this.state.reciver.map(emp =>
                            <div >
                                <div id='Demo1' className=' w3-animate-left'>
                                    <a href='javascript:void(0)' className='w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey' onClick={() => this.openMail(emp.username)}>
                                        <div className='w3-container'>
                                            <img className=' img-circle w3-margin-right' src={emp.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM4S38P0ARNHrGJmB6g_SWarEbJgyipJ4rIDM3rwyzCcuH0Gnq'} style={{width: '70px', hight: '70px'}} /><span className='w3-opacity w3-large'>{emp.username}</span>
                                        </div>
                                    </a>
                                    <button className='w3-bar-item w3-button'><i className='fa fa-paper-plane w3-margin-right' />Sent </button>
                                    <button className='w3-bar-item w3-button' onClick={() => this.delete(emp.username)} > <i className='fa fa-trash w3-margin-right' />Trash </button>
                                </div>
                            </div>
                        )}
                    </nav>
                    <div id='closeMenShanAlllah'>
                        <div className='modal' id='myModal' >

                            <div className='w3-modal-content w3-animate-zoom' >
                                <div className='w3-container w3-padding w3-red' >
                                    <span className='w3-button w3-red w3-right w3-xxlarge' data-dismiss='modal' onClick={this.close}><i className='fa fa-remove' /></span>
                                    <h2>Send Mail</h2>
                                </div>
                                <div className='w3-panel'>
                                    <label>To</label>
                                    <input className=' w3-margin-bottom form-control' type='text' onChange={this.onChange} name='user' />
                                    <label>Text</label>
                                    <input className=' w3-margin-bottom form-control' type='text' onChange={this.onChange} name='text' placeholder="What's on your mind?" />
                                    <div className='w3-section'>
                                        <button className='w3-button w3-red btn' data-dismiss='modal' onClick={this.close}>Cancel  <i className='fa fa-remove' /></button>
                                        <button className='btn w3-button w3-light-grey w3-right' onClick={() => this.sendMessage(this.state.user, this.state.text)}>Send  <i className='fa fa-paper-plane' /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w3-overlay w3-hide-large w3-animate-opacity' title='Close Sidemenu' id='myOverlay' />

                    <div className='w3-main' >
                        <i className='fa fa-bars w3-button w3-white w3-hide-large w3-xlarge w3-margin-left w3-margin-top' />
                        <div style={{marginLeft: 300}}>

                            {this.state.messages.map(item =>
                                <div key={item._id}>
                                    <div id={item.sender} className='w3-container person' >
                                        <h4><i className='fa fa-clock-o' /> From {item.sender}, {item.time.slice(0, 10)}.</h4>
                                        <br />
                                        {this.state.rightMes2.map(mes2 =>
                                            <div key={mes2._id}>
                                                <div className='msg messageSent'>
                                                    {mes2.message}
                                                    <span className='timestamp'>{item.time.slice(11, 16)}</span>
                                                </div>
                                            </div>
                                        )}
                                        {this.state.rightMes.map(mes =>
                                            <div key={mes._id} className='msg messageReceived'>
                                                {mes.message}
                                                <span className='timestamp'>{item.time.slice(0, 10)}</span>
                                                <button className='btn btn-raised btn-danger' className='center block' type='button' onClick={() => this.remove(mes.sender, item._id)}><i className='fa fa-remove' /></button>
                                                <br />
                                            </div>
                                        )
                                        }
                                        <div />
                                        <div className='input-group mb-3'>
                                            <input type='text' onChange={this.onChange} name='text' className='form-control' placeholder="What's on your mind?" aria-describedby='basic-addon2' />
                                            <div className='input-group-append'>
                                                <button className='btn btn-raised btn-info' type='button' onClick={() => this.sendMessage(item.sender, this.state.text)}>Send <i className='w3-margin-left fa  fa-chevron-circle-right' /></button>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <hr />
                                        <br />
                                        <br />
                                        <div className='container'>
                                            <h3 style={{color: 'green'}} className='text-center'>{this.state.messageForDOM}</h3>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            );
        }
    }
}
export default Message;
