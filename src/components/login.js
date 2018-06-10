import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';
import {withRouter} from 'react-router-dom';
export class Login extends Component {
  state = {
    email: "",
    password:""     
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/auth',
    {
      emailAddress:this.state.email,
      password:this.state.password
    }).then(response => {
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
            Login to Slam Crown
          </h1>
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <legend>Login:</legend>
                  <span>Email: </span>
                  <input 
                    type="text" 
                    placeholder="demo@slamcrown.com" 
                    id="email-address" 
                    onInput={e => this.updateModel('email',e)} 
                    required 
                    />
                  <br/>
                  <span>Password: </span>
                  <input 
                    type="password" 
                    placeholder="password" 
                    id="user-password" 
                    onInput={e => this.updateModel('password',e)}
                    required 
                  />
                  <br/>  
              </fieldset>
                <input type="submit" value="Login!" />
            </form>
        </div>
    )
  }
}
//this sends authorized users to login withRouter and React-router-dom
export default withRouter(Login);