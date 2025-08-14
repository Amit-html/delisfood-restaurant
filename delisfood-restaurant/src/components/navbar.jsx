import React, { useState } from "react";
import '../styles/navbar.css'; // Assuming you have a CSS file for styling

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on link click (for mobile)
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="logo"
        />
        <h2>MyWebsite</h2>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === "Enter") setIsOpen(!isOpen);
        }}
      >
        <span />
        <span />
        <span />
      </div>

      {/* Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#" onClick={handleLinkClick}>
          Home
        </a>
        <a href="#" onClick={handleLinkClick}>
          About
        </a>
        <a href="#" onClick={handleLinkClick}>
          Services
        </a>
        <a href="#" onClick={handleLinkClick}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;


