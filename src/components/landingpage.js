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
              <li classname="instruct-li">
                If you have ever had a concussion or you are recovering from mild traumatic brain injury, create a free account!
              </li>
              <li classname="instruct-li">
                You can track your daily symptom recovery
              </li>
              <li classname="instruct-li">
                Note the occurences of headaches, fevers and fatigue, etc.
              </li>
              <li classname="instruct-li">
                * Slam Crown is not method or replacement for medical treatment!
              </li>       
            </ul>
      </div>
    )
  }
}

export default LandingPage
