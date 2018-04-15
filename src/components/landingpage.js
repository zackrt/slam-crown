import React, { Component } from 'react'

import './landingpage.css';
export class LandingPage extends Component {
  render() {
    return (
      <div>
        Welcome to Slam Crown!!
        <a href="/sign-up">Sign Up now!</a>
        <h1>This is a simple and easy concussion & Traumatic Brain Injury reporting app</h1>
          <h2>What does Slam Crown do?</h2>
            <ul className="instructions">
              <li className="instruct-li">
                If you had a concussion or you are recovering from mild traumatic brain injury, create a free account!
              </li>
              <li className="instruct-li">
                You can track your daily symptom recovery
              </li>
              <li className="instruct-li">
                Note the occurences of headaches, fevers and fatigue, etc.
              </li>
              <li className="instruct-li">
                * Slam Crown is not method or replacement for medical treatment!
              </li>       
            </ul>
            <div className="brainimage">
              <img src="16487-NQNWIS.jpg" width="320px"/>
            </div>
      </div>
    )
  }
}

export default LandingPage
