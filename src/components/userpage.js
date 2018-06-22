import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
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
        console.log(token, 'Token in userpage!')
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
            //console.log(response);
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
        const token = localStorage.getItem('token');
        const data = Object.assign({}, this.state, {selectedSymptoms:this.state.selectedSymptoms.join()})
        axios.put(`${API_URL}/api/userpage`, data, {
            headers : {
                Authorization: `Bearer ${token}`
            }  
        }).then(response => {
            //console.log(response);
            this.props.history.push('/userreporthistory');
        })
        // send the put with this.state, and then display it,  
        console.log("state on submit",this.state);
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
                        <form className="record-day"id="record-day" onSubmit={this.handleSubmit}>
                        <div className="form-section">
                        <div className="input-field col s12">
                                <label  htmlFor="textarea1 other-symptom-summary"className="text-area-label" >(old)Other symptoms:</label>
                                <textarea 
                                    id="textarea1" 
                                    className="other-symptom-summary materialize-textarea"
                                    rows="10" 
                                    placeholder="Irritability, confusion, lack of coordination, memory loss, vomiting, dizziness, ringing in the ears, and/or sleepiness"
                                    value={this.state.othersymptom} 
                                    onChange={(e)=>{this.setState({othersymptom:e.target.value})}}
                                >
                                </textarea>
                            </div>
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
                            <button className="btn waves-effect waves-light"type="submit">Submit</button>
                        </div>
                        </form>
                </section>
        </div>
    )
  }
}

export default withRouter(UserPage)
