import React,{useState} from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import "./Header.css";


export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [classNam, setClassNam] = useState("header center newLight");
  React.useEffect(() => {
    if (themename == "dark") {
      setClassNam("header center darkN");
    } else {
      setClassNam("header center lightN");
    }
  }, [themename]);
  return (
    <>
      <header className={classNam}>
      {/* style={{backgroundColor: "white",  position:"fixed", margin:"auto"}} */}
        <h3>
          <a href="#about" className="link">
            <span style={{ fontWeight:"700"}}>
              Harsh <span style={{ color: "orange" }}>Mithaiwala</span>
            </span>
            
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};