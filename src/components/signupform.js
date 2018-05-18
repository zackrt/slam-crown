import React, { Component } from 'react';

import './SignupForm.css';

export class SignUp extends Component {
    state = {
        email: "",
        password:"",
        dateOfConcussion:""     
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }  
    updateModel = (key, e) => {
        this.setState({[key]:e.target.value})
    }
    
  render() {
    console.log(this.state);
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
                        <span>Email:</span>
                        <input
                            type="text" 
                            placeholder="demo@slamcrown.com" 
                            onInput={e => this.updateModel('email',e)} 
                            required 
                        />
                        <br />
                        <span>Password:</span>
                        <input 
                            type="text" 
                            placeholder="password" 
                            onInput={e => this.updateModel('password',e)} 
                            required 
                        />
                        <br />
                        <span>Date of Concussion:</span>
                        <input 
                            type="date"  
                            onInput={e => this.updateModel('dateOfConcussion',e)}
                        />
                    </fieldset>
                    <input className="submitbtn" type="submit" value="Submit!" />
            </form>
      </div>
    )
  }
}

export default SignUp
