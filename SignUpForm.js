import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

//import Noty from 'noty';

class SignUpForm extends Component {

  constructor() {
    super();
    //var self = this;
    this.state = {
      name: '',
      password: '',
      email: '',
      phone_no: '',
      gender: '',
      address: '',
      security: '',
      role: ''

      // hasAgreed: false
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

    axios.post('http://10.196.11.101:5000/register', {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      phone_no: this.state.phone_no,
      gender: this.state.gender,
      address: this.state.address,
      answer: this.state.security,
      role: this.state.role

    })

      .then(function (response) {
        console.log(response);
        alert('Your details have been successfully submitted');
        //console.log(response.data);
        //self.callPost();
      })
      .catch(function (error) {
        console.log(error);
        alert('User already exists, Please try again with different email id');
      });


    //  axios.get('http://10.196.11.101:5000/register')
    //  .then((response) => {
    //    console.log(response);

    //  }) 





  }

  //  callPost = () => {
  //      <Route exact path="/hello-world" component={HelloWorld}>
  //      </Route>
  //    }) 
  // }



  render() {
    return (
      <div className="FormCenter">
        <div className="FormTitle">
          <NavLink to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Register</NavLink>
        </div>
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">Full Name</label>
            <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="phone_no">Phone Number</label>
            <input type="number" id="phone_no" className="FormField__Input" placeholder="Enter your Phone Number" name="phone_no" value={this.state.phone_no} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="gender">Gender</label>
            <input type="text" id="gender" className="FormField__Input" placeholder="Enter your Gender as M/F/O" name="gender" value={this.state.gender} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="address">Address</label>
            <input type="text" id="address" className="FormField__Input" placeholder="Enter your Address" name="address" value={this.state.address} onChange={this.handleChange} />
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
            <label className="FormField__Label" htmlFor="role">Role</label>
            <input type="text" id="role" className="FormField__Input" placeholder="Enter your Role as C/P/S" name="role" value={this.state.role} onChange={this.handleChange} />

          </div>

          {/* <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">Terms and Services</a>
                </label>
              </div> */}

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;