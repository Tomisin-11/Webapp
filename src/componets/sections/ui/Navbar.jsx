import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDropdown = (index) =>
    setOpenDropdown(openDropdown === index ? null : index);

  // Detect scroll for navbar shadow or color
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar">
        <h1>T-Codes</h1>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Desktop Menu */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li className="has-dropdown">
    HOME
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F3F3F3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
    {/* ADDED DROPDOWN STRUCTURE */}
    <ul className="dropdown-menu"> 
        <li>Home Layout 1</li>
        <li>Home Layout 2</li>
    </ul>
</li>

          <li>SHOP</li>

          <li className="has-dropdown">
            PAGES
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F3F3F3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>

            <ul className="dropdown-menu">
              <li>CART</li>
              <li>CHECKOUT</li>
              <li>PRODUCTS</li>
              <li>PRODUCT DETAILS</li>
              <li>CONTACT US</li>
              <li>LOGIN</li>
              <li>REGISTER</li>
            </ul>
          </li>

          <li className="has-dropdown">
            BLOG
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F3F3F3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>

            <ul className="dropdown-menu">
              <li>BLOG GRID LIST</li>
              <li>SINGLE DETAILS</li>
            </ul>
          </li>

          <li>CONTACT</li>
        </ul>
      </div>

      {/* Sidebar Menu for Mobile */}
      <div className={`sidebar ${menuOpen ? "active" : ""}`}>
        <div className="close-btn" onClick={toggleMenu}>×</div>

        <ul>
          <li onClick={() => toggleDropdown(0)}>
            HOME <span>{openDropdown === 0 ? "−" : "+"}</span>
          </li>

          <li>SHOP</li>

          <li onClick={() => toggleDropdown(1)}>
            PAGES <span>{openDropdown === 1 ? "−" : "+"}</span>
            {openDropdown === 1 && (
              <ul className="dropdown">
                <li>CART</li>
                <li>CHECKOUT</li>
                <li>PRODUCTS</li>
                <li>PRODUCT DETAILS</li>
                <li>CONTACT US</li>
                <li>LOGIN</li>
                <li>REGISTER</li>
              </ul>
            )}
          </li>

          <li onClick={() => toggleDropdown(2)}>
            BLOG <span>{openDropdown === 2 ? "−" : "+"}</span>
            {openDropdown === 2 && (
              <ul className="dropdown">
                <li>BLOG GRID LIST</li>
                <li>SINGLE DETAILS</li>
              </ul>
            )}
          </li>

          <li>CONTACT</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
