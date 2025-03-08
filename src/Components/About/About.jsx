import React from "react";
import "./About.css";
import { Type } from "./Type";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { Introduction } from "./Introduction";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <>
            <section className="hero-section" id="about">
                <div className="hero-content">
                    <div className="hero-text" data-aos="fade-right">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="greeting-box"
                        >
                            <span className="greeting-emoji">👋</span>
                            <h3 className="greeting">Hi, I'm Harsh Mithaiwala</h3>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="hero-title"
                        >
                            Developing Digital  <span className="highlight">Innovations</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="type-wrapper"
                        >
                            <Type />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="hero-description"
                        >
                            Full Stack Developer specializing in building exceptional digital experiences.
                            I focus on creating innovative solutions that combine clean code with
                            user-centered design. Currently exploring the intersection of AI and web development
                            to build smarter, more intuitive applications.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="cta-buttons"
                        >
                            <a href="#projects" className="primary-btn">View My Work</a>
                            <a href="#contact" className="secondary-btn">Get In Touch</a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className="social-links"
                        >
                            <a
                                href="https://github.com/harsh9090"
                                target="_blank"
                                rel="noreferrer"
                                className="social-link"
                                title="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="mailto:harsh.mithaiwala.hm@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className="social-link"
                                title="Email"
                            >
                                <MdEmail />
                            </a>
                            <a
                                href="tel:+1-5145815499"
                                target="_blank"
                                rel="noreferrer"
                                className="social-link"
                                title="Phone"
                            >
                                <MdPhone />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/harsh-mithaiwala-459b6717b/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-link"
                                title="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>
                        </motion.div>
                    </div>

                   
                </div>
            </section>

            <Introduction />
        </>
    );
};
