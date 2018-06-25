import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom'
import axios from 'axios';
import './SignupForm.css';
import {API_URL} from '../config';
export class SignUp extends Component {
    state = {
        email: "",
        password:"",
        dateOfConcussion:""     
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("API URL IN SIGNUP",API_URL);
        axios.post(`${API_URL}/api/users`, 
        {
            emailAddress:this.state.email,
            password:this.state.password,
            dateOfConcussion:this.state.dateOfConcussion
        }).then(response => console.log(response));
        //console.log(this.state);
    }  
    updateModel = (key, e) => {
        this.setState({[key]:e.target.value})
    }
// to push from create on sign-up page to login aka api/auth page
// this.props.history.push('api/auth')
// SomeComponent
// export default withRouter(SomeComponent)
    
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
                        <div className="input-field col s6">
                        <input placeholder="Demo" id="first_name" type="text" class="validate"/>
                        <label htmlFor="email_address">Email Address</label>
                        </div>
                        <span>Password:</span>
                        <input 
                            type="password" 
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
                    <button className="submitbtn btn waves-effect waves-light" type="submit" name="action">Submit!
                    </button>
            </form>
      </div>
    )
  }
}

export default SignUp
