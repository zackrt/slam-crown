import React, { Component } from 'react';

import './userpage.css';
export class UserPage extends Component {
  render() {
    return (
      <div>
            <h1>
        Welcome back, User
            </h1>
                <h2>
                    Today's Report
                </h2>
                        <section className="reportform">
                        <div class="btn-group">
                            <select name="symptoms" size="4">
                                <option value="headache">Headache</option>
                                <option value="fatigue">Fatigue</option>
                                <option value="fever">Fever</option>
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
