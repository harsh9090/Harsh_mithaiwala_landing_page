import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Introduction } from "./Introduction";
import resume from "../../assets/Harsh_Mithaiwala_Resume.pdf";

export const About = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="about center" id="about">
                {/* Title */}
                <h1 data-aos="fade-right" className="mobileHead about__title">
                    <span className="about__name2">Hola!</span> Unveil My{" "}
                    <span className="about__name">Creative Lab</span>
                </h1>

                {/* Typing / Subheading */}
                <div data-aos="fade-right" className="about__subtitle">
                    <Type />
                </div>

                {/* Description */}
                <p className="about__desc" data-aos="fade-up">
                    I'm a Full Stack Developer working mainly with the MERN stack and other programming languages. I enjoy building responsive UIs, creating scalable back-end services, and adding cool AI features to improve user experiences. I'm into automation, handling user authentication, and working in Agile teams. I love solving tricky problems and learning new things along the way. I'm excited to join a team that values innovation and collaboration.
                </p>

                {/* Social Icons */}
                <div className="about__contact center" data-aos="fade-up">
                    <a
                        href="https://github.com/harsh9090"
                        aria-label="github"
                        target="_blank"
                        rel="noreferrer"
                        className="link link--icon"
                    >
                        <GitHubIcon />
                    </a>
                    <a
                        href="mailto:harsh.mithaiwala.hm@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="mail"
                        className="link link--icon"
                    >
                        <EmailIcon />
                    </a>
                    <a
                        href="tel:+1-5145815499"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="phone"
                        className="link link--icon"
                    >
                        <PhoneIcon />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/harsh-mithaiwala-459b6717b/"
                        aria-label="linkedin"
                        className="link link--icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <LinkedInIcon />
                    </a>
                </div>

                {/* Resume Button */}
                {/* <div data-aos="fade-up">
                    <a href={resume} download>
                        <button className="btnResume">
                            Resume <GetAppIcon className="resume-dwnld" />
                        </button>
                    </a>
                </div> */}
            </section>

            {/* Introduction Section (below hero) */}
            <Introduction />
        </>
    );
};
