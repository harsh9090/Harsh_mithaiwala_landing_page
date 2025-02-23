import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import "./Header.css";

export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [headerClass, setHeaderClass] = useState("header center headerLight");

  useEffect(() => {
    if (themename === "dark") {
      setHeaderClass("header center headerDark");
    } else {
      setHeaderClass("header center headerLight");
    }
  }, [themename]);

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
