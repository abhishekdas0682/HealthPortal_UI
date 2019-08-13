import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
//import {Nav, NavItem, NavBar, Badge} from 'react-bootstrap';

import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import ForgetPassword from './pages/ForgetPassword';
import NavigationBar from './pages/NavigationBar';
import logo from './opitum.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/health-insurance-portal/">
        <div>
        <Route path="/hello-world" component={NavigationBar}>
            </Route> 
        </div>

        <div className="App">
          <div className="App__Aside">
              <img src={logo} alt="Logo" />; 
          </div>
          <div className="App__Form">
            
            <div className="PageSwitcher">
              <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Login</NavLink>
              <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Register</NavLink>
            </div>

            {/* <div className="FormTitle">
              <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Login</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Register</NavLink>
            </div> */}

            <Route exact path="/" component={SignUpForm}>
            </Route>
            <Route path="/sign-in" component={SignInForm}>
            </Route>
            <Route path="/forget-password" component={ForgetPassword}>
            </Route>
 


          </div>

        </div>
      </Router>
    );
  }
}

export default App;