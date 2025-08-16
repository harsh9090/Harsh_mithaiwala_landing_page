import React from "react";
import "./GetInTouch.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { ThemeContext } from "../../Context/theme";

const GetInTouch = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [copied, setCopied] = React.useState(null);

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const contactInfo = [
    {
      id: 'email',
      icon: <CgMail />,
      title: 'Email',
      value: 'harsh.mithaiwala.hm@gmail.com',
      copyable: true
    },
    {
      id: 'phone',
      icon: <BsFillTelephoneFill />,
      title: 'Phone',
      value: '+1 (514) 581-5499',
      copyable: true
    },
    {
      id: 'location',
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Canada',
      copyable: false
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/harsh-mithaiwala-459b6717b/'
    },
    {
      name: 'GitHub',
      icon: <VscGithub />,
      url: 'https://github.com/harsh9090'
    }
  ];

  return (
    <section className="contact-section section" id="contact">
      <div className="contact-header" data-aos="fade-down">
        <h2 className="section__title">
          Get in <span className="different">Touch</span>
        </h2>
        <p className="section__subtitle">
          Ready to collaborate? Let's discuss your project.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-cards">
          {contactInfo.map((contact, index) => (
            <div
              key={contact.id}
              className={`contact-card ${copied === contact.id ? 'copied' : ''}`}
              onClick={() => contact.copyable && handleCopy(contact.value, contact.id)}
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="card-icon">
                {contact.icon}
              </div>
              <h3>{contact.title}</h3>
              <p className="contact-value">{contact.value}</p>
              {contact.copyable && (
                <span className="copy-status">
                  {copied === contact.id ? '✓ Copied' : 'Click to copy'}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="social-connect" data-aos="fade-up">
          <div className="social-buttons">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="social-button"
                data-aos="fade-up"
                data-aos-delay={200 + (index * 100)}
              >
                <div className="social-icon">
                  {social.icon}
                </div>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-cta" data-aos="fade-up">
          <a 
            href="mailto:harsh.mithaiwala.hm@gmail.com?subject=Project%20Discussion" 
            className="cta-button"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;