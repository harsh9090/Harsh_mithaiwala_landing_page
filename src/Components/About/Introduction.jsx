import React, { useContext } from "react";
import "./Introduction.css";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/ProfPic.jpg";
import CodeIcon from "@material-ui/icons/Code";
import SchoolIcon from "@material-ui/icons/School";
import SportsCricketIcon from "@material-ui/icons/SportsCricket";

export const Introduction = () => {
  const [{ themename }] = useContext(ThemeContext);

  return (
    <section className="introduction-section">
      <div className="section" data-aos="fade-right">
        <h2 className="section__title">
          About <span className="different">Me</span>
        </h2>

        <div className={"introduction-container " + themename}>
          {/* Profile Image Card */}
          <div className="profile-card" data-aos="fade-right">
            <div className="profile-image-container">
              <img src={profilePic} alt="Harsh Mithaiwala" className="profile-image" />
            </div>
          </div>

          {/* Content Cards */}
          <div className="content-container" data-aos="fade-left">
            {/* Main Introduction */}
            <div className="intro-card">
              <h3>Passionate Developer & Lifelong Learner</h3>
              <p>
                I thrive on continuous learning and embrace challenges that push me to grow.
                Web development fascinates me with its rapid evolution, offering endless opportunities
                to innovate and create impactful solutions.
              </p>
            </div>

            {/* Achievements */}
            <div className="achievement-card">
              <div className="achievement-icon">
                <CodeIcon />
              </div>
              <div className="achievement-content">
                <h4>Key Achievement</h4>
                <p>
                  Developed a decentralized blockchain-based review system,
                  showcasing problem-solving abilities and innovation in emerging technologies.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="achievement-card">
              <div className="achievement-icon">
                <SchoolIcon />
              </div>
              <div className="achievement-content">
                <h4>Education</h4>
                <p>
                  Master of Engineering in Applied Computer Science, specializing in
                  cloud computing, distributed systems, and AI.
                </p>
              </div>
            </div>

            {/* Personal */}
            <div className="achievement-card">
              <div className="achievement-icon">
                <SportsCricketIcon />
              </div>
              <div className="achievement-content">
                <h4>Beyond Code</h4>
                <p>
                  Cricket enthusiast and puzzle solver, applying analytical thinking both
                  in and out of development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};