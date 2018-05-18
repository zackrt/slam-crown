import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';

export class Login extends Component {
  state = {
    email: "",
    password:""     
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/login',
    {
      emailAddress:this.state.email,
      password:this.state.password
    }).then(response => console.log(response));

  updateModel = (key, e) => {
    this.setState({[key]:e.target.value})
  }; 
}
  render() {
    console.log(this.state);
    return (
        <div>
          <h1>
            Login to Slam Crown
          </h1>
            <form>
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
                    type="text" 
                    placeholder="password" 
                    id="user-password" 
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
export default Login;