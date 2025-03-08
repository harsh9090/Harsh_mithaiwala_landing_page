import React from "react";
import "./GetInTouch.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { ThemeContext } from "../../Context/theme";

const GetInTouch = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [copied, setCopied] = React.useState(false);
  const [activeCard, setActiveCard] = React.useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="contact-section section">
      <div className="contact-header" data-aos="fade-down">
        <h2 className="section__title">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="title-decoration">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p className="section__subtitle">
          Ready to turn ideas into reality? Let's create something extraordinary together!
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-cards">
          <div 
            className={`contact-card ${activeCard === 'email' ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard('email')}
            onMouseLeave={() => setActiveCard(null)}
            onClick={() => handleCopy("harsh.mithaiwala.hm@gmail.com", 'email')}
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="card-icon">
              <CgMail />
            </div>
            <h3>Email</h3>
            <p>harsh.mithaiwala.hm@gmail.com</p>
            <span className="copy-status">
              {copied === 'email' ? 'Copied! ✓' : 'Click to copy'}
            </span>
          </div>

          <div
            className={`contact-card ${activeCard === 'phone' ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard('phone')}
            onMouseLeave={() => setActiveCard(null)}
            onClick={() => handleCopy("+1-(514)5815499", 'phone')}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="card-icon">
              <BsFillTelephoneFill />
            </div>
            <h3>Phone</h3>
            <p>+1-(514)5815499</p>
            <span className="copy-status">
              {copied === 'phone' ? 'Copied! ✓' : 'Click to copy'}
            </span>
          </div>

          <div
            className={`contact-card ${activeCard === 'location' ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard('location')}
            onMouseLeave={() => setActiveCard(null)}
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="card-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Location</h3>
            <span>Canada</span>
          </div>
        </div>

        <div className="social-connect" data-aos="fade-up">
          <h3>Connect With Me</h3>
          <div className="social-buttons">
            <a
              href="https://www.linkedin.com/in/harsh-mithaiwala-459b6717b/"
              target="_blank"
              rel="noreferrer"
              className="social-button linkedin"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/harsh9090"
              target="_blank"
              rel="noreferrer"
              className="social-button github"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <VscGithub />
              <span>GitHub</span>
            </a>

            <a
              href="mailto:harsh.mithaiwala.hm@gmail.com"
              className="social-button email"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <CgMail />
              <span>Email Me</span>
            </a>
          </div>
        </div>

        <div className="contact-cta" data-aos="fade-up" data-aos-delay="700">
          <p>Have a project in mind? Let's discuss your ideas!</p>
          <a href="mailto:harsh.mithaiwala.hm@gmail.com" className="cta-button">
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;