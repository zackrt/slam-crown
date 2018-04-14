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
                    <section>
                        <form id="headache">
                        <div class="btn-group">
                            <button>Headache</button>
                            <button>Fever</button>
                            <button>Nausea</button>
                            <button>Fatigue</button>
                        </div>
                        </form>
                                    </section>
                        <section>
                            <form id="record-day">
                            <div class="form-section">
                                <label for="other-symptom-summary"className="text-area-label" >Other symptoms:</label>
                                <textarea name="other-symptom-summary" rows="15"></textarea>
                            </div>
                            <button type="submit">Submit</button>
                            <button type="reset">Reset</button>
                            </form>
                        </section>
                        <section className="painslider">
                            <label>Rate level of pain (1 - 5)</label>
                        <div class="slidecontainer">
                            <input type="range" min="1" max="10" value="5" class="slider" id="myPainRange" />
                        </div>
                        </section>
      </div>
    )
  }
}

export default UserPage
