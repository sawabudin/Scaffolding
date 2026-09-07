import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <span>DR</span> ZAZAI
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#industries">Industries</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Hamburger Button */}
        <button
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#services" onClick={closeMenu}>
          Services
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#industries" onClick={closeMenu}>
          Industries
        </a>
        <a href="#gallery" onClick={closeMenu}>
          Gallery
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </header>
  );
}

export default Header;
