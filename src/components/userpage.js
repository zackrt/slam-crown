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
                        <div class="form-section">
                            <label for="headache">Headache</label>
                        </div>
                        </form>
                    </section>
                        <section>
                            <form id="fever" />
                                    
                                    <div class="form-section">
                                        <label for="fever">Fever</label>
                                    </div>
                            
                        </section>
                                    <section>
                                        <form id="nausea">
                                                
                                                <div class="form-section">
                                            <label for="nausea">Nausea</label>
                                        </div>
                                        </form>
                                    </section>
                        <section>
                            <form id="record-day">
                            
                            <div class="form-section">
                                <label for="other-symptom-summary">Other symptom</label>
                                <textarea name="other-symptom-summary" rows="15"></textarea>
                            </div>
                            <button type="submit">Submit</button>
                            <button type="reset">Reset</button>
                            </form>
                        </section>
      </div>
    )
  }
}

export default UserPage
