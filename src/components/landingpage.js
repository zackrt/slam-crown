import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-materialize';

import './LandingPage.css';
export class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="title-descrip">
          <h3 className="app-title">A simple Concussion & TBI reporting app</h3>
        </div>
          <div>
            <Button 
              waves='light' 
              className="signuplink" 
              node='a' 
              href='/sign-up'
            >
            Sign Up!
            </Button>
          </div>
          <Link className="loginlink" to="/login">Log In & Sign In!</Link>
            <h3>What does Slam Crown do?</h3>
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
