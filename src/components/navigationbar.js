import React, { Component } from 'react';
import {Dropdown, NavItem, Button} from 'react-materialize';
//import {Link} from 'react-router-dom';
import './NavigationBar.css';

export class NavigationBar extends Component {
  render() {
    return (
      <div>
        <nav className="NavBar">
          <Dropdown trigger={
            <Button>Menu</Button>
            }>
              <NavItem href="/login">Login</NavItem>
              <NavItem href="/sign-up">Sign Up</NavItem>
              <NavItem divider />
              <NavItem href="https://github.com/zackrt/slam-crown">Github</NavItem>
              <NavItem href="/login">Sign Out</NavItem>
          </Dropdown>
        </nav>    
      </div>
    )
  }
}

export default NavigationBar

