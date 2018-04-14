import React, { Component } from 'react';

import './login.css';

export class Login extends Component {
  render() {
    return (
        <div>
        <h1>
        Login to Slam Crown <i class="fi-crown"></i>
        </h1>
        <form>
    <fieldset>
            <legend>Login:</legend>
            <span>Email: </span><input type="text" placeholder="demo@slamcrown.com" id="email-address"required /><br/>
            <span>Password: </span><input type="text" placeholder="password" id="user-password" required /><br/>  
    </fieldset>
           <input type="submit" value="Login!" />
          </form>
          </div>
    )
  }
}

export default Login
