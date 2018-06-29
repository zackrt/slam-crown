import React, { Component } from 'react';

import './LandingPage.css';
export class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>A simple Concussion & Traumatic Brain Injury reporting app</h1>
        <a className="signuplink" href="/sign-up">Sign Up now!</a>
        <br />
        <a className="loginlink" href="/login">Log In & Sign In!</a>
          <h2>What does Slam Crown do?</h2>
          <section className ="description">
            <ul className="instructions">
              <li className="instruct-li">
                If you've had a concussion or you are recovering from mild traumatic brain injury, create a free account!
              </li>
              <li className="instruct-li">
                You can track your symptom recovery
              </li>
              <li className="instruct-li">
                Note the occurences of headaches, fevers, irritablity, and fatigue, etc.
              </li>
              <li className="instruct-li">
                * Slam Crown is not method or replacement for medical treatment!
              </li>       
            </ul>
            <div className="brainimage">
              <img alt="" src="16487-NQNWIS.jpg" width="320px" align="middle"/>
            </div>
            </section>
      </div>
    )
  }
}

export default LandingPage
