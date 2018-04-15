import React, { Component } from 'react'
import './navigationbar.css';

export class Navigationbar extends Component {
  render() {
    return (
      <div>
        <nav className="NavBar">
                    <div class="dropdown">
                      <button class="dropbtn">Menu</button>
                      <div class="dropdown-content">
                        <a href="/login">Login</a>
                        <a href="/sign-up">Sign Up</a>
                        <a href="https://github.com/zackrt/SlamCrown">Github</a>
                        <a href="/login">Sign Out</a>
                      </div>
                    </div>
            </nav>    
      </div>
    )
  }
}

export default Navigationbar

