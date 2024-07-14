import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import GetAppIcon from '@material-ui/icons/GetApp';
import { Introduction } from "./Introduction";
import resume from "../../assets/Harsh_Mithaiwala_Resume.pdf"


export const About = () => {
    return (
        <>
            <div className="about center">
                <h1 data-aos="fade-right" className="mobileHead">
                    <span className="about__name2">Hola!</span>  Unveil My <span className="about__name">Creative Lab</span>
                </h1>
                <Type />
                <p className="about__desc" data-aos="fade-right">
               An experienced Full Stack Developer specializing in the MERN stack and various programming languages. Enjoys crafting responsive UIs, building scalable back-end services, and integrating AI-driven features to enhance user experiences. Skilled in automation, user authentication, and Agile methodologies, thriving on solving complex problems and continuously learning new technologies. Excited to bring skills and passion for innovation to a dynamic and forward-thinking team.
                </p>
                <div className="about__contact center">
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
                <a href={resume} download>
                <button className="btnResume">
                    Resume <GetAppIcon className="resume-dwnld" />
                </button>
                </a>
            </div>
            
            <Introduction />

        </>
    );
};