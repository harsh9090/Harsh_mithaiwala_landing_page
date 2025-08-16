import React, { useContext } from "react";
import "./Introduction.css";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/ProfPic.jpg";
import { FaCode, FaGraduationCap, FaLightbulb, FaRocket, FaUsers, FaChartLine } from "react-icons/fa";

export const Introduction = () => {
  const [{ themename }] = useContext(ThemeContext);

  return (
    <section className="introduction-section">
      <div className="introduction-container">
        <div className="introduction-header" data-aos="fade-up">
          <h2 className="section-title">
            About <span className="accent-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Professional developer with a passion for innovation and continuous growth
          </p>
        </div>

        <div className="introduction-content">
          {/* Profile Section */}
          <div className="profile-section" data-aos="fade-right">
            <div className="profile-image-wrapper">
              <img src={profilePic} alt="Harsh Mithaiwala" className="profile-image" />
              <div className="profile-overlay">
                <div className="profile-badge">
                  <FaCode />
                  <span>Full Stack Developer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="content-section" data-aos="fade-left">
            {/* Main Introduction */}
            <div className="intro-card main-intro">
              <div className="card-header">
                <div className="card-icon">
                  <FaRocket />
                </div>
                <h3>Professional Overview</h3>
              </div>
              <p>
                I am a results-driven Full Stack Developer with extensive experience in modern web technologies and cloud solutions. 
                My expertise lies in architecting scalable applications that deliver measurable business impact. 
                I excel at translating complex requirements into elegant, maintainable code while leading development teams 
                and mentoring junior developers. My track record includes successfully delivering high-impact projects 
                that have improved operational efficiency and user experience for multiple organizations.
              </p>
            </div>

            {/* Key Achievements Grid */}
            <div className="achievements-grid">
              {/* Technical Achievement */}
              <div className="achievement-card">
                <div className="achievement-icon">
                  <FaCode />
                </div>
                <div className="achievement-content">
                  <h4>Technical Excellence</h4>
                  <p>
                    Developed a decentralized blockchain-based review system, demonstrating 
                    advanced problem-solving skills and expertise in emerging technologies.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="achievement-card">
                <div className="achievement-icon">
                  <FaGraduationCap />
                </div>
                <div className="achievement-content">
                  <h4>Advanced Education</h4>
                  <p>
                    Master of Engineering in Applied Computer Science, specializing in 
                    cloud computing, distributed systems, and artificial intelligence.
                  </p>
                </div>
              </div>

              {/* Innovation */}
              <div className="achievement-card">
                <div className="achievement-icon">
                  <FaLightbulb />
                </div>
                <div className="achievement-content">
                  <h4>Innovation Focus</h4>
                  <p>
                    Passionate about exploring cutting-edge technologies and applying 
                    creative solutions to complex technical challenges.
                  </p>
                </div>
              </div>

              {/* Leadership */}
              <div className="achievement-card">
                <div className="achievement-icon">
                  <FaUsers />
                </div>
                <div className="achievement-content">
                  <h4>Collaborative Approach</h4>
                  <p>
                    Strong team player with experience leading development initiatives 
                    and mentoring junior developers in best practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Values */}
            <div className="values-section">
              <h4>Professional Values</h4>
              <div className="values-grid">
                <div className="value-item">
                  <FaChartLine className="value-icon" />
                  <span>Continuous Learning</span>
                </div>
                <div className="value-item">
                  <FaCode className="value-icon" />
                  <span>Code Quality</span>
                </div>
                <div className="value-item">
                  <FaUsers className="value-icon" />
                  <span>Team Collaboration</span>
                </div>
                <div className="value-item">
                  <FaRocket className="value-icon" />
                  <span>Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};