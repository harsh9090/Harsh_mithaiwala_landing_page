import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../Context/theme";
import "./Header.css";

export const Header = () => {
  const [{ themename, toggeltheme }] = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavList, setShowNavList] = useState(false);
  const [headerClass, setHeaderClass] = useState("header");
  const [activeSection, setActiveSection] = useState("about");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
              // Track active section
        const sections = ['about', 'journey', 'techstack', 'projects', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        if (current) {
          setActiveSection(current);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update header class based on theme and scroll
  useEffect(() => {
    let className = "header";
    if (isScrolled) className += " header--scrolled";
    if (themename === "dark") className += " header--dark";
    setHeaderClass(className);
  }, [themename, isScrolled]);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };

  return (
    <header className={headerClass}>
      <div className="header__container">
        {/* Brand/Logo */}
        <div className="header__brand">
          <a href="#about" className="link header__brand-link">
            <span className="header__brand-name">
              Harsh <span className="header__brand-highlight">Mithaiwala</span>
            </span>
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className="header__nav">
          <ul
            style={{ display: showNavList ? "flex" : null }}
            className="header__nav-list"
          >
            <li className="header__nav-item">
              <a
                href="#about"
                onClick={() => toggleNavList("#about")}
                className={`link header__nav-link ${activeSection === 'about' ? 'active' : ''}`}
              >
                About
              </a>
            </li>
            <li className="header__nav-item">
              <a
                href="#journey"
                onClick={() => toggleNavList("#journey")}
                className={`link header__nav-link ${activeSection === 'journey' ? 'active' : ''}`}
              >
                Journey
              </a>
            </li>
            <li className="header__nav-item">
              <a
                href="#techstack"
                onClick={() => toggleNavList("#techstack")}
                className={`link header__nav-link ${activeSection === 'techstack' ? 'active' : ''}`}
              >
                Skills
              </a>
            </li>
            <li className="header__nav-item">
              <a
                href="#projects"
                onClick={() => toggleNavList("#projects")}
                className={`link header__nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              >
                Projects
              </a>
            </li>
            <li className="header__nav-item">
              <a
                href="#contact"
                onClick={() => toggleNavList("#contact")}
                className={`link header__nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="header__actions">
          <button
            type="button"
            onClick={toggeltheme}
            className="btn btn--icon header__theme-btn"
            aria-label="toggle theme"
          >
            {themename === "dark" ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <button
            type="button"
            onClick={() => setShowNavList(!showNavList)}
            className="btn btn--icon header__hamburger"
            aria-label="toggle navigation"
          >
            {showNavList ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
