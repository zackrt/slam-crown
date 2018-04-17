import React, { Component } from 'react';
import './NavigationBar.css';

export class NavigationBar extends Component {
  render() {
    return (
      <div>
        <nav className="NavBar">
                    <div className="dropdown">
                      <button className="dropbtn">Menu</button>
                      <div className="dropdown-content">
                        <a href="/login">Login</a>
                        <a href="/sign-up">Sign Up</a>
                        <a href="https://github.com/zackrt/slam-crown">Github</a>
                        <a href="/login">Sign Out</a>
                      </div>
                    </div>
            </nav>    
      </div>
    )
  }
}

export default NavigationBar

