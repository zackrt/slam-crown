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
                    <legend className="legend">Sign Up:</legend>
                        <br />        
                        <div className="input-field col s12">
                        <input 
                            placeholder="demo" 
                            id="first_name" 
                            type="email"  
                            className="validate" 
                            onInput={e => this.updateModel('email',e)} 
                            required
                        />
                        <label className="input-labels" htmlFor="email_address">Email Address</label>
                    </div>
                        <div className="input-field col s12">
                        <input 
                            type="password"
                            id="password" 
                            placeholder="password" 
                            onInput={e => this.updateModel('password',e)} 
                            required 
                        />
                        <label className="input-labels" htmlFor="password">Password</label>
                    </div>
                        <br />
                        <div className="input-field col s12">
                        <input 
                            type="date"  
                            onInput={e => this.updateModel('dateOfConcussion',e)}
                        />
                        <label className="input-labels" htmlFor="date-of-concussion">Date of Concussion:</label>
                        </div>
                    </fieldset>
                    <button className="submitbtn btn waves-effect waves-light pulse" type="submit" name="action">Submit!
                        <i className="material-icons right">send</i>
                    </button>
                    <br />
                    <a href="/login">Login Here</a>
            </form>
      </div>
    )
  }
}
export default SignUp
