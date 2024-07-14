import React, { useEffect } from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [classNam, setClassNam] = React.useState("section newLight");
  useEffect(() => {
    if (themename == "dark") {
      setClassNam("section newDark");
    } else {
      setClassNam("section newLight");
    }
  }, [themename]);
  return (
    <>
      <div className={classNam}>
        {/* <hr style={{ border: '0', borderTop: '30px solid green' }} /> */}
        <div className="footerBox">
          <h3 className="footer">
            Crafted with Care{" "}
            <span style={{ color: `red`, background: `transparent` }}>❤</span>{" "}
             Harsh Mithaiwala
          </h3>
        </div>
      </div>
    </>
  );
};