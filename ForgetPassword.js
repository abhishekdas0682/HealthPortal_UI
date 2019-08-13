import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class ForgetPassword extends Component {
  constructor() {
    super();

    this.state = {
      uid: '',
      new_password: '',
      security: ''
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

    axios.post('http://10.196.11.101:5000/forgotPassword', {
      uid: this.state.uid,
      new_password: this.state.new_password,
      answer: this.state.security
    })
      .then((response) => {
        console.log(response);
        alert('Your request have been successfully submitted');
      }, (error) => {
        console.log(error);
        alert(error);
      });

    //  axios.get('http://10.196.11.101:5000/login')
    //  .then((response) => {
    //    console.log(response);

    //  }) 
  }

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="uid">User ID</label>
            <input type="text" id="uid" className="FormField__Input" placeholder="Enter your User ID" name="uid" value={this.state.uid} onChange={this.handleChange} />
          </div>
          <div className="FormField">

            <label className="FormField__Label" htmlFor="security">Security Question:</label>
            <select>
              <option value="qOne">In which city was your mother born in?</option>
              <option value="qTwo">What was your childhood nickname?</option>
              <option value="qThree">What was your favorite sport in high school?</option>
              <option value="qFour">What school did you attend for sixth grade?</option>
              <option value="qFive">What is your favorite team?</option>
              <option value="qSix">What was the name of the company where you had your first job?</option>
            </select>
            <input type="text" id="security" className="FormField__Input" placeholder="Enter your Answer" name="security" value={this.state.security} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="new_password">New Password</label>
            <input type="password" id="new_password" className="FormField__Input" placeholder="Enter your new password" name="new_password" value={this.state.new_password} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Submit</button> <Link to="/sign-in" className="FormField__Link">Return back to Sign In</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default ForgetPassword;