import React, { Component } from 'react';
import {Dropdown, MenuItem, Button} from 'react-materialize';
//import {Link} from 'react-router-dom';
import './NavigationBar.css';
//Place GITHUB Link in footer!
export class NavigationBar extends Component {
  render() {
    return (
      <div>
        <nav className="NavBar">
        <span className="welcome-title-nav" width="80px" height="25px">SLAM CROWN</span>
          <Dropdown trigger={
            <Button className="dropdown-btn">Menu</Button>
            }>
              <MenuItem id="navigation-login-link" className="nav-login-link menu-item" href="/login">Login</MenuItem>
              <MenuItem id="navigation-signup-link" className="nav-signup-link menu-item" href="/sign-up">Sign Up</MenuItem>
              <MenuItem className="menu-item" divider />
              <MenuItem className="menu-item" href="/login">Sign Out</MenuItem>
          </Dropdown>
        </nav>     
      </div>
    )
  }
}

export default NavigationBar

