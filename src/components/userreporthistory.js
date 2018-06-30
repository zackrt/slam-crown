import React, { Component } from 'react';
import axios from 'axios';
import {API_URL} from '../config';
import './UserReportHistory.css'
//pull from the database all of this.state after submit from userpage
//from feedback, make a way to return user BACK to either Login and login them out (with instructions to return)
export class UserReportHistory extends Component {
  state = {
    painLevel:'',
    othersymptom:'',
    selectedSymptoms:''
};
handleClick = () => {
  this.props.history.push('/login');
}
highPainAlert = () => {
      console.log('PAIN LEVEL',this.state.painLevel);
      if (this.state.painLevel >= 4) {
       alert("Contact a Medical Professional");
     }
}
  componentDidMount = () => {
    const token = localStorage.getItem('token');
    axios.get(`${API_URL}/api/userpage`, {
      headers : {
          Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        this.setState({
          painLevel : response.data.painLevel,
          othersymptom : response.data.othersymptom,
          selectedSymptoms : response.data.selectedSymptoms,
          dateOfConcussion:response.data.dateOfConcussion
      })
        this.highPainAlert();
        console.log(response, 'res in userreporthistory')
      })
      .catch(error => {
         console.log('error!');
      })
  }

  render() {
    //console.log("DATE OF C",typeof this.state.dateOfConcussion,this.state.dateOfConcussion)
    let concussionTimeStamp = Number(new Date(this.state.dateOfConcussion))/ 1000 
    let todayTimeStamp = Number(new Date())/ 1000
    let daysSince = (todayTimeStamp - concussionTimeStamp) / 86400
    
    return (
      <div>
        <h2>
          Past symptom history
        </h2>
          <section>
             <ul className="daily-report-ul">
              <div className="report-container"> 
               Symptoms reported:
             <li><h3>{this.state.selectedSymptoms}</h3></li>
             <h3>{this.state.othersymptom}</h3>
             <h3>pain: {this.state.painLevel}</h3>
             <p>Last concussion:  {Math.round(daysSince)} days ago</p>
              </div>
             </ul>
          </section>
          <section className="logout-instruct">Come back tomorrow! We hope you have a speedy recovery!</section>
          <button className="log-out btn waves-effect waves-light" onClick={this.handleClick} type="button" name="action">Log Out</button>
      </div>
    )
  }
}

export default UserReportHistory
