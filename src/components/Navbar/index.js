import React from 'react'

import './styles.css';

const Header = () => (
  <header id="main-navbar">
    <div className="container">
      <div className="brand">
        <h3>Unleash</h3>
      </div>
      <div className="menu">
        <a href="#pablo">Logout</a>
      </div>
    </div>
  </header>
);

export default Header;