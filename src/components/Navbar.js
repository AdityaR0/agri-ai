import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setNavOpen(false); // Always close menu on click
  };

  return (
    <nav className="navbar">
      <div className="navbar-row">
        <div className="nav-title" onClick={() => scrollToSection("hero")}>AGRI.AI</div>
        <button
          className="nav-hamburger"
          aria-label={navOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setNavOpen((open) => !open)}
        >
          {navOpen ? "✕" : "☰"}
        </button>
      </div>
      <div className={`nav-links${navOpen ? " open" : ""}`}>
        <button onClick={() => scrollToSection("hero")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("features")}>Features</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
        <button onClick={() => scrollToSection("hero")}>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
