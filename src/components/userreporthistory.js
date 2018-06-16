import React, { Component } from 'react';
import axios from 'axios';
import {API_URL} from '../config';

//pull from the database all of this.state after submit from userpage
export class UserReportHistory extends Component {
  componentDidMount = () => {
    axios.get(`${API_URL}/api/userpage`)
      .then(response => {
  
      })
      .catch(error => {
        
      })
  }
  render() {
    return (
      <div>
        <h2>
          Past symptom history
        </h2>
          <section>
             symptoms reported:
             
             
          </section>
      </div>
    )
  }
}

export default UserReportHistory
