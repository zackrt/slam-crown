import React, { Component } from 'react';
import axios from 'axios';
import {API_URL} from '../config';

//pull from the database all of this.state after submit from userpage, this needs token from localstorage, 
export class UserReportHistory extends Component {
  state = {
    painLevel:'',
    othersymptom:'',
    selectedSymptoms:''
};
handleClick = () => {
  this.props.history.push('/login');
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
          selectedSymptoms : response.data.selectedSymptoms
      })
        console.log(response, 'res in userreporthistory')
      })
      .catch(error => {
         console.log('error!');
      })
  }
  render() {
    return (
      <div>
        <h2>
          Past symptom history
        </h2>
          <section>
             <ul className="daily-report-ul">
               Past symptoms reported:
             <li><h3>{this.state.selectedSymptoms}</h3></li>
             <h3>{this.state.othersymptom}</h3>
             <h3>{this.state.painLevel}</h3>
             </ul>
          </section>
          <section>Come back tomorrow, we hope you have a speedy recovery!</section>
          <button onClick={this.handleClick} type="submit">Log Out</button>
      </div>
    )
  }
}

export default UserReportHistory
