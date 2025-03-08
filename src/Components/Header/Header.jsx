import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import "./Header.css";

export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerClass, setHeaderClass] = useState("header");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  return (
    <header className={headerClass}>
      <h3 className="header__brand">
        <a href="#about" className="link header__brand-link">
          <span className="header__brand-name">
            Harsh <span className="header__brand-highlight">Mithaiwala</span>
          </span>
        </a>
      </h3>
      <Navbar />
    </header>
  );
};
