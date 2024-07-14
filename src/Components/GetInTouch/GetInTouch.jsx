import React from "react";
import "./GetInTouch.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";
const GetInTouch = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title2" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactMain">
          <div>
          <div
            className={"contactcontainer " + themename}
            data-aos="fade-right"
          >
            <a
              href="https://www.linkedin.com/in/harsh-mithaiwala-459b6717b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/harsh9090"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" />
            </a>
            <a
              href="mailto:harsh.mithaiwala.hm@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" />
            </a>
            
          </div>
         <br />
          <div className="mailNumber" data-aos="fade-right">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p>harsh.mithaiwala.hm@gmail.com</p>
              </span>
            </div>
            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p>+1-(514)5815499</p>
              </span>
            </div>
            
          </div>
          </div>
          {/* <br />
          <div className="email-box"><Email /></div> */}
        </div>
      </div>
      
    </>
  );
};

export default GetInTouch