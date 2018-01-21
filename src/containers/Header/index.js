import React from 'react';

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
        <a href="home">Home</a>
        <a href="settings">Some Feature We Havent Made Yet</a>
      </div>
      <div>
        <a href="login">Log In / Sign Up</a>
      </div>
    </div>
  );
}
