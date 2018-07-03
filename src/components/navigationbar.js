import React, { Component } from 'react';
import {Dropdown, NavItem, Button} from 'react-materialize';
//import {Link} from 'react-router-dom';
import './NavigationBar.css';
//Place GITHUB Link in footer!
export class NavigationBar extends Component {
  render() {
    return (
      <div>
        <nav className="NavBar">
          <Dropdown trigger={
            <Button className="dropdown-btn">Menu</Button>
            }>
              <NavItem className="nav-login-link" href="/login">Login</NavItem>
              <NavItem className="nav-signup-link" href="/sign-up">Sign Up</NavItem>
              <NavItem divider />
              <NavItem href="/login">Sign Out</NavItem>
          </Dropdown>
        </nav>     
      </div>
    )
  }
}

export default NavigationBar

