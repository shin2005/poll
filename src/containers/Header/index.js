import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div
      className="topnav"
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <div>
        <Link to="/">Home</Link>
        <Link to="/resources">Resources</Link>
      </div>
      <div>
        <a href="login">Log In / Sign Up</a>
      </div>
    </div>
  );
}
