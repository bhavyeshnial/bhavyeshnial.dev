import { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-wrapper">
          
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <img src="logo.svg" alt="Bhavyesh Nial Logo" />
            </Link>
          </div>

          <nav className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
            <ul className="menu-grid">
              <li>
                <NavLink to="/" onClick={closeMenu}>
                  <i className="fa-solid fa-house"></i>
                  <span>Home</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/portfolio" onClick={closeMenu}>
                  <i className="fa-solid fa-briefcase"></i>
                  <span>Projects</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/services" onClick={closeMenu}>
                  <i className="fa-solid fa-laptop-code"></i>
                  <span>Services</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" onClick={closeMenu}>
                  <i className="fa-solid fa-user"></i>
                  <span>About</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" onClick={closeMenu}>
                  <i className="fa-solid fa-envelope"></i>
                  <span>Contact</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/blog" onClick={closeMenu}>
                  <i className="fa-solid fa-blog"></i>
                  <span>Blog</span>
                </NavLink>
              </li>
            </ul>

            <div className="mobile-menu-footer">
              <Link to="/contact" className="menu-cta-btn" onClick={closeMenu}>
                Start a Project
              </Link>
            </div>
          </nav>

          <div className="header-actions">
            <Link 
              to="/start-project"
              className={`header-primary-btn ${isMenuOpen ? "hide" : ""}`}
            >
              Start a Project
            </Link>
            
            <button 
              className="menu-toggle" 
              onClick={toggleMenu}
              aria-label="Toggle Navigation"
            >
              <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars-staggered"}`}></i>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;