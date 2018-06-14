import React, { Component } from 'react';

import SymptomSelector from './SymptomSelector';
import './UserPage.css';
import axios from 'axios';
import {API_URL} from '../config';
export class UserPage extends Component {
    state = {
        painLevel: 3,
        othersymptom:""
    };
    // checking auth
    componentDidMount = () => {
        const token = localStorage.getItem('token');  
        if (!token){
            //if not token, redirect to /login
            this.props.history.push('/login')
        }
        axios.get(`${API_URL}/api/userpage`, {
            headers : {
                Authorization: `Bearer ${token}`
            }  
        })
        .then(response => {
            console.log(response);
            this.setState({
                emailAddress : response.data.emailAddress
            })
        })
        .catch(error =>{
            console.log(error);
            alert('Bad Credentials!');
            this.props.history.push('/login');
        })
        //read/get token req from localStorage.getItem , if token: exists -> then request with token, else redirect to /login with err
    };
    handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8080/api/userpage') 
        console.log(this.state);
    };
  render() {
    console.log(this.state);
    return (
      <div>
            <h1>
        Welcome back, User {this.state.emailAddress}
            </h1>
                <h2>
                    Today's Report
                </h2>
                        <SymptomSelector 
                            onUpdate = {(selectedSymptoms) => 
                                this.setState({selectedSymptoms})}
                        /> 
                <section className="reportform">           
                        <form id="record-day">
                        <div className="form-section">
                                <label htmlFor="other-symptom-summary"className="text-area-label" >Other symptoms:</label>
                                <textarea 
                                    className="other-symptom-summary"
                                    rows="10" 
                                    placeholder="confusion, lack of coordination, memory loss, vomiting, dizziness, ringing in the ears, sleepiness, and excessive fatigue"
                                    value={this.state.othersymptom} 
                                    onChange={(e)=>{this.setState({othersymptom:e.target.value})}}
                                >
                                </textarea>
                                <section className="painslider" >
                                    <label>Rate level of pain (1 - 5)</label>
                                </section>
                        <div className="slidecontainer">
                            <input 
                                onChange={(e)=>{this.setState({painLevel:e.target.value})}}
                                type="range" 
                                min="1" 
                                max="5" 
                                value={this.state.painLevel}
                                className="slider" id="myPainRange" 
                            />
                        </div>
                            <button type="submit">Submit</button>
                        </div>
                        </form>
                </section>
        </div>
    )
  }
}

export default UserPage
