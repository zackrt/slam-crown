import React, { Component } from 'react';

import './signupform.css';

export class SignUp extends Component {
    state = {
        email: ""     
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }  

  render() {
    return (
      <div>
        <h1>
        Create an Account Today!
        </h1>
        <h2>
            Report on your Concussion & TBI Recovery
        </h2>
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Sign Up:</legend>
                        <span>Email:</span><input type="text" placeholder="demo@slamcrown.com" onInput={e => this.setState({
                        email: e.target.value
                        })} required /><br />
                        <span>Password:</span><input type="text" placeholder="password" required /><br />
                        <span>Date of Concussion:</span><input type="date"  />
                    </fieldset>
                    <input className="submitbtn" type="submit" value="Submit!" />
            </form>
      </div>
    )
  }
}

export default SignUp
