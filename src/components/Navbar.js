import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav-bar">
      <header>
        <h1 className="header">Math Magicians</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Calculator2">Calculator</Link>
          </li>
          <li>
            <Link to="/Quote">Quote</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
