import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

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
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
