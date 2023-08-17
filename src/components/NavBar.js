import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/navbar.css';

function NavBar() {
  return (
    <header>
      <h1 className="title">Math Magicians</h1>
      <nav className="navbar">
        <ul className="list">
          <li className="list-item">
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="separator" />
          <li className="list-item">
            <NavLink to="/calculator">Calculator</NavLink>
          </li>
          <li className="separator" />
          <li className="list-item">
            <NavLink to="/quote">Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
