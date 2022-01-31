import React from 'react';
import { Button } from './components/button/Button';
import { Navbar, NavItem } from './components/navbar/Navbar';
import { FaBeer } from 'react-icons/fa'


function App() {
  return (
    <div className="App">
      <Navbar brand="Home" shadow>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </Navbar>
      <FaBeer/>
    </div>
  );
}

export default App;
