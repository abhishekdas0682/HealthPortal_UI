import React, { Component } from 'react';
import { Link, NavLink, /*Redirect*/ } from 'react-router-dom';
//import HelloWorld from './pages/HelloWorld';

import axios from 'axios';

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      uid: '',
      password: '',
      //fireRedirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    axios.post('http://10.196.11.101:5000/login', {
      uid: this.state.uid,
      password: this.state.password
    })
      .then((response) => {
        console.log(response);
        alert('You have successfully logged in');
        //this.setState({ fireRedirect: true })
        
      }, (error) => {
        console.log(error);
        alert('User_ID and Password Combination not valid' + error);
      });

    //  axios.get('http://10.196.11.101:5000/login')
    //  .then((response) => {
    //    console.log(response);

    //  }) 
  }



  render() {
    // if(this.state.fireRedirect) {
    //   return <Redirect to={HelloWorld}/>
    // }
    return (

      <div className="FormCenter">
        <div className="FormTitle">
          <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Login</NavLink>
        </div>
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="uid">User ID</label>
            <input type="text" id="uid" className="FormField__Input" placeholder="Enter your User ID" name="uid" value={this.state.uid} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <Link to="/forget-password" className="FormField__Link">Forgot Password?</Link>
          </div>
          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;