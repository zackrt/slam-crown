import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';
import {withRouter} from 'react-router-dom';
import {API_URL} from '../config';
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
      let disabledLink = document.getElementById('welcome-link')
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
                <legend>Login:</legend>
                <div className="input-field col s12">
                        <input 
                            placeholder="demo" 
                            id="email-address"
                            type="text"  
                            className="validate" 
                            onInput={e => this.updateModel('email',e)} 
                            required
                        />
                        <label htmlFor="email_address">Email Address:</label>
                    </div>
                  <br/>
                  <div className="input-field col s12">
                        <input 
                            type="password"
                            id="user-password" 
                            placeholder="password" 
                            onInput={e => this.updateModel('password',e)} 
                            required 
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                  <br/>  
              </fieldset>
                <button className="btn waves-effect waves-light pulse" type="submit" name="action">Login!
                </button>
            </form>
        </div>
    )
  }
}
//this sends authorized users to login withRouter and React-router-dom
export default withRouter(Login);