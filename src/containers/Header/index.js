import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ onSignInClick, username }) {
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
      {username && <Link to={`/${username}`}>{username}</Link>}
      {!username && (
        <div className="signin" onClick={onSignInClick}>
          <span>Log In / Sign Up</span>
        </div>
      )}
    </div>
  );
}
