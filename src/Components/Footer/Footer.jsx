import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";
import { FaHeart } from "react-icons/fa";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Made with <FaHeart className="heart-icon" /> by Harsh Mithaiwala
          <span className="year">© {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
};