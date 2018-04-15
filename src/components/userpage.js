import React, { Component } from 'react';

import './userpage.css';
export class UserPage extends Component {
    state = {
        symptoms: [],
        painlevel: "",
        othersymptom:""
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    } 
  render() {
    return (
      <div>
            <h1>
        Welcome back, {emailaddress}}
            </h1>
                <h2>
                    Today's Report
                </h2>
                        <section className="reportform">
                        <div class="symptoms-btn-group">
                            <select className="symptomselector" name="symptoms" size="4" multiple onSelect>
                                <option value="headache" selected >Headache</option>
                                <option value="fatigue">Fatigue</option>
                                <option value="fever" selected >Fever</option>
                                <option value="nausea">Nausea</option>
                            </select>
                        </div>
                        <form id="record-day">
                        <div class="form-section">
                                <label for="other-symptom-summary"className="text-area-label" >Other symptoms:</label>
                                <textarea name="other-symptom-summary" rows="15"></textarea>
                                <section className="painslider" >
                                    <label>Rate level of pain (1 - 5)</label>
                                </section>
                        <div class="slidecontainer">
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
