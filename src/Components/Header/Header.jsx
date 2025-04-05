import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";
import { FiMenu, FiX } from "react-icons/fi";
import { logo } from "../../constants";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Utility function to close menu on link click
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Navigation */}
      <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ""}`}>
        <ul>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? styles.active : ""}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? styles.active : ""}
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>

          {/* Services Dropdown */}
          <li className={styles.dropdown}>
            <Link
              to="/services"
              className={location.pathname === "/services" ? styles.active : ""}
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <ul className={styles.dropdownMenu}>
              <li>
                <a
                  href="https://valuedge-solutions.com/img/SAPIntegrationCapabilityCaseStudies.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                >
                  SAP Java Integration
                </a>
              </li>
              <li>
                <Link
                  to="/application"
                  className={
                    location.pathname === "/application" ? styles.active : ""
                  }
                  onClick={handleLinkClick}
                >
                  Application Development
                </Link>
              </li>
              <li>
                <Link
                  to="/testingServices"
                  className={
                    location.pathname === "/testingServices"
                      ? styles.active
                      : ""
                  }
                  onClick={handleLinkClick}
                >
                  Testing Services
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/products"
              className={location.pathname === "/products" ? styles.active : ""}
              onClick={handleLinkClick}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? styles.active : ""}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
