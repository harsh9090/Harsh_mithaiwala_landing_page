import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Context/theme";
import "./Navbar.css";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export const Navbar = () => {
  const [{ themename, toggeltheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  
  return (
    <nav className="nav">
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        <li className="nav__list-item">
          <a
            href="#about"
            onClick={() => toggleNavList("#about")}
            className="link link--nav"
          >
            About
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#journey"
            onClick={() => toggleNavList("#journey")}
            className="link link--nav"
          >
            Journey
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#techstack"
            onClick={() => toggleNavList("#techstack")}
            className="link link--nav"
          >
            Skills
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#projects"
            onClick={() => toggleNavList("#projects")}
            className="link link--nav"
          >
            Projects
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#contact"
            onClick={() => toggleNavList("#contact")}
            className="link link--nav"
          >
            Contact
          </a>
        </li>
        
      </ul>
      
      <div className="nav__buttons">
        <button
          type="button"
          onClick={toggeltheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
        >
          {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>
        <button
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </nav>
  );
};