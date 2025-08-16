import React from "react";
import "./About.css";
import { Type } from "./Type";
import { FaGithub, FaLinkedinIn, FaDownload, FaCode, FaDatabase, FaServer, FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdWeb, MdMobileFriendly, MdTrendingUp } from "react-icons/md";
import { Introduction } from "./Introduction";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <>
            <section className="hero-section" id="about">
                <div className="hero-container">
                    {/* Main Hero Content */}
                    <div className="hero-content">
                        {/* Left Side - Main Information */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="hero-left"
                        >
                            {/* Greeting & Title */}
                            <div className="hero-greeting">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="greeting-badge"
                                >
                                    👋 Welcome to my portfolio
                                </motion.div>
                                
                                <h1 className="hero-title">
                                    Hi, I'm <span className="name-highlight">Harsh Mithaiwala</span>
                                </h1>
                                
                                <h2 className="hero-subtitle">
                                    <Type />
                                </h2>
                                
                                <p className="hero-description">
                                    A passionate Full Stack Developer with expertise in building modern, 
                                    scalable web applications. I transform ideas into elegant, 
                                    user-centric digital solutions that drive business growth.
                                </p>
                            </div>

                            {/* Key Highlights */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="hero-highlights"
                            >
                                <div className="highlight-item">
                                    <div className="highlight-icon">
                                        <FaRocket />
                                    </div>
                                    <div className="highlight-content">
                                        <h4>3+ Years</h4>
                                        <p>Professional Experience</p>
                                    </div>
                                </div>
                                
                                <div className="highlight-item">
                                    <div className="highlight-icon">
                                        <FaCode />
                                    </div>
                                    <div className="highlight-content">
                                        <h4>10+ Projects</h4>
                                        <p>Successfully Delivered</p>
                                    </div>
                                </div>
                                
                                <div className="highlight-item">
                                    <div className="highlight-icon">
                                        <FaLightbulb />
                                    </div>
                                    <div className="highlight-content">
                                        <h4>15+ Technologies</h4>
                                        <p>Mastered & Implemented</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Call to Action */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="hero-cta"
                            >
                                <a href="#projects" className="cta-primary">
                                    <span>View My Work</span>
                                    <MdTrendingUp />
                                </a>
                                <a href="#contact" className="cta-secondary">
                                    Let's Connect
                                    <FaUsers />
                                </a>
                                <a href="/resume.pdf" className="cta-resume" download>
                                    <FaDownload />
                                    Download Resume
                                </a>
                            </motion.div>
                        </motion.div>

                    </div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="social-section"
                    >
                        <div className="social-links">
                            <a
                                href="https://github.com/harsh9090"
                                target="_blank"
                                rel="noreferrer"
                                className="social-link github"
                                title="GitHub Profile"
                            >
                                <FaGithub />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/harsh-mithaiwala-459b6717b/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-link linkedin"
                                title="LinkedIn Profile"
                            >
                                <FaLinkedinIn />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Introduction />
        </>
    );
};
