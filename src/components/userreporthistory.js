import React, { Component } from 'react';
import axios from 'axios';
import {API_URL} from '../config';

//pull from the database all of this.state after submit from userpage
//from feedback, make a way to return user BACK to either Login and login them out (with instructions to return)
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
