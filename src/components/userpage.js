import React, { Component } from 'react';

import SymptomSelector from './SymptomSelector';
import './UserPage.css';
export class UserPage extends Component {
    state = {
        symptoms: [],
        painlevel: "",
        othersymptom:""
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };
  render() {
    return (
      <div>
            <h1>
        Welcome back, User EmailAddress
            </h1>
                <h2>
                    Today's Report
                </h2>
                        <SymptomSelector /> 
                <section className="reportform">           
                        <form id="record-day">
                        <div className="form-section">
                                <label for="other-symptom-summary"className="text-area-label" >Other symptoms:</label>
                                <textarea className="other-symptom-summary" rows="10" placeholder="confusion, lack of coordination, memory loss, vomiting, dizziness, ringing in the ears, sleepiness, and excessive fatigue"></textarea>
                                <section className="painslider" >
                                    <label>Rate level of pain (1 - 5)</label>
                                </section>
                        <div className="slidecontainer">
                            <input type="range" min="1" max="10" value="5" class="slider" id="myPainRange" />
                        </div>
                            <button type="submit">Submit</button>
                            <button type="reset">Reset</button>
                        </div>
                        </form>
                </section>
        </div>
    )
  }
}

export default UserPage
