// src/components/Header.jsx
import React from 'react';

// Receive userName as a prop using object destructuring { userName }
function Header({ userName }) { 
  return (
    <header className="app-header">
      <nav>
        <span className="logo">Calmana</span>
        <div className="nav-links">
          <span>Home</span>
          <span>Chatrooms</span>
          <span>AI Assistant</span>
          <span>Journal</span>
        </div>
        <div className="user-info">
          <span>Hi, {userName}</span> {/* Use the prop here */}
          <img src="https://via.placeholder.com/30" alt="User Avatar" className="user-avatar" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
