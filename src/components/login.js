import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';
import {withRouter} from 'react-router-dom';
import {API_URL} from '../config';
import {Input, Row} from 'react-materialize';
export class Login extends Component {
  state = {
    email: "",
    password:""     
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/api/auth`,
    {
      emailAddress:this.state.email,
      password:this.state.password
    }).then(response => {
      //hide welcome link on login
      let disabledLink = document.getElementById('welcome-link');
      disabledLink.classList.add('hiddenElement');
      console.log(response);
      const token = response.data.token;
      localStorage.setItem('token',token);
      // *If res.token: true, persist to localStorage and redirect to user specific userpage, else err with .props.history is redirect
      this.props.history.push('/userpage')
    }).catch(error => {
      console.log(error);
      alert("Unable to login!");
    });
    
  }
  updateModel = (key, e) => {
    this.setState({[key]:e.target.value})
  }; 
  render() {
    console.log(this.state);
    return (
      <div>
          <h1>
            Login
          </h1>
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <legend>Sign In:</legend>
                  <Row>
                    <Input type="email" 
                      label="Email Address" 
                      s={12} 
                      placeholder="demo@slamcrown.com" 
                      id="email-address"  
                      className="validate email-input" 
                      onInput={e => this.updateModel('email',e)}
                      aria-label="email address"
                      aria-required="true"  
                      required
                    />
                    <Input type="password" 
                      label="password" s={12} id="user-password" 
                      placeholder="password"
                      className="password" 
                      onInput={e => this.updateModel('password',e)} 
                      required
                      aria-label="password"
                      aria-required="true"  
                    />
                  </Row>  
              </fieldset>
                <button className="login-btn btn waves-effect waves-light pulse" type="submit" name="action">Login!
                </button>
            </form>
        </div>
    )
  }
}
//this sends authorized users to login withRouter and React-router-dom
export default withRouter(Login);