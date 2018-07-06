import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom'
//have them match the password, persist both passwords into the state.
import axios from 'axios';
import './SignupForm.css';
import {API_URL} from '../config';
import {Row, Input} from 'react-materialize';
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
        }).then(response =>{ 
            console.log(response);
            this.props.history.push('/login');
            alert(`Account ${this.state.email} created, click Login!`);
        })
        //console.log(this.state);
    }  
    updateModel = (key, e) => {
        this.setState({[key]:e.target.value})
    }
// to push from create on sign-up page to login aka api/auth page
// this.props.history.push('api/auth')
// SomeComponent
// export default withRouter(SomeComponent)
  //add date of concussion in props to render/display v
  //
  render() {
    console.log(this.state);
    return (
      <div>
          <div className="create-title">
            <h1>
        Create an Account Today!
            </h1>
          </div>
        <h2>
            Report on your Concussion & TBI Recovery
        </h2>
            <div classname="sign-up-form">
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend className="legend">Sign Up:</legend>
                        <br />        
                    <Row>
                    <Input type="email" 
                        label="Email Address" 
                        s={12} 
                        placeholder="demo@slamcrown.com" 
                        id="email-address" 
                        className="validate email-input-label" 
                        onInput={e => this.updateModel('email',e)}
                        aria-label="email address"
                        aria-required="true" 
                        required
                    />
                        <Input type="password" 
                            label="Password" s={12}  
                            id="password" 
                            placeholder="password" 
                            onInput={e => this.updateModel('password',e)}
                            aria-label="password"
                            aria-required="true"  
                            required 
                        />
                    </Row>
                        <br />
                        <Row>
                        <label className="date-picker-label">Date of Concussion:</label>
                        <Input 
                            name='on' 
                            type='date' 
                            onChange={e => this.updateModel('dateOfConcussion',e)} 
                            labelClassName="date-picker-label"
                            aria-label="date of concussion"
                            aria-required="true" 
                        />
                        </Row>
                </fieldset>
                    <button className="submitbtn btn waves-effect waves-light pulse" type="submit" name="action">Submit!
                        <i className="material-icons right">send</i>
                    </button>
                    <br />
            </form>
            </div>
      </div>
    )
  }
}
export default SignUp
