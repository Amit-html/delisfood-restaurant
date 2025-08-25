import React, { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on link click (for mobile)
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
          alt="DelisFood Logo"
        />
        <h2>DelisFood</h2>
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
        <a href="#home" onClick={handleLinkClick}>
          Home
        </a>
        <a href="#menu" onClick={handleLinkClick}>
          Menu
        </a>
        <a href="#specials" onClick={handleLinkClick}>
          Specials
        </a>
        <a href="#reviews" onClick={handleLinkClick}>
          Reviews
        </a>
        <a href="#contact" onClick={handleLinkClick}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
