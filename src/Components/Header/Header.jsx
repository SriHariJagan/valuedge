import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";
import { FiMenu, FiX } from "react-icons/fi";
import { logo } from "../../constants";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ""}`}>
        <ul>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? styles.active : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? styles.active : ""}
            >
              About
            </Link>
          </li>
          <li className={styles.dropdown}>
            <Link
              to="/services"
              className={location.pathname === "/services" ? styles.active : ""}
            >
              Services
            </Link>
            <ul className={styles.dropdownMenu}>
              <li>
                <a
                  href="https://valuedge-solutions.com/img/SAPIntegrationCapabilityCaseStudies.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SAP Java Integration
                </a>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/application" ? styles.active : ""
                  }
                  to="/application"
                >
                  Application Development
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/testingServices"
                      ? styles.active
                      : ""
                  }
                  to="/testingServices"
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
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? styles.active : ""}
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
