import React from "react";
import "./Projects.css";
import { FaAngular, FaNodeJs } from "react-icons/fa";
import {
    SiAndroid,
    SiAngular,
    SiCss3,
    SiEthereum,
    SiExpress,
    SiFirebase,
    SiJavascript,
    SiMaterialui,
    SiMysql,
    SiPhp,
    SiPython,
    SiPytorch,
    SiSolidity,
    SiTensorflow,
    SiXampp
} from "react-icons/si";
export const Projects = () => {
    return (
        <>
            <div className="section" >
                <h2 className="section__title different">Projects</h2>
                <div className="allProjects">
                <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img
                                        src="/Project1.png"
                                        alt="live-posts"
                                        
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>live-posts</h2>
                                <p>
                                    Developed a community-driven web app similar to Instagram for posting, viewing, and interacting with user content using Angular and Firebase.
                                </p>
                                <div>
                                    <SiFirebase />
                                    <SiExpress />
                                    <FaAngular />
                                    <FaNodeJs />
                                </div>
                                <div>
                                    <a
                                        href="https://live-posts-dce78.web.app/home"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt onbt">
                                            Go Live
                                        </span>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img
                                        src="/AI.png"
                                        alt="rainRainSense_AI"
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h3>RainSense AI</h3>
                                <p>
                                    Developed RainSenseAI, a machine learning project for accurate rain prediction using Decision Trees and Deep Neural Networks.
                                </p>
                                <div>
                                    <SiTensorflow />
                                    <SiPytorch />
                                    <SiPython />
                                </div>
                                <div>

                                    <a
                                        href="https://github.com/darshak-k/RainSenseAI-Project"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
                                            View Code
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img
                                        src="/Project2.png"
                                        alt="covidProject"
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h3>Covid Management System</h3>
                                <p>
                                   Built a PHP and MySQL system for tracking patient statuses, managing recovery data, and providing doctors with an admin panel for comprehensive hospital management.
                                </p>
                                <div>
                                    <SiPhp />
                                    <SiMysql />
                                    <SiJavascript />
                                    <SiCss3 />
                                    <SiXampp />
                                </div>
                                <div>
                                    
                                    <a
                                        href="https://github.com/harsh9090/Covid_management_system"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
                                            View Code
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                </div>
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img
                                        src="/news_app.png"
                                        alt="News Application"
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>News Application</h2>
                                <p>
                                    Developed an Android news app using NewsAPI, featuring live news display, viewing, sharing, and more with Glide for images and Material Design.
                                </p>
                                <div>
                                    <SiAndroid />
                                    
                                </div>
                                <div>
                                    <a
                                        href="https://github.com/kpanwala/News-App"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt onbt">
                                            View Code
                                        </span>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img
                                        src="/blockchain.png"
                                        alt="News Application"
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h3>DecentraReview</h3>
                                <p>
                                    Developed a decentralized review system using Ethereum blockchain to ensure tamper-proof and permanently secure user feedback.
                                </p>
                                <div>
                                    <SiAngular />
                                    <SiEthereum />
                                    <SiFirebase />
                                    <SiMaterialui />
                                    <SiJavascript />
                                    <SiSolidity />
                                </div>
                                <div>
                                    <a
                                        href="https://github.com/harsh9090/blockchain-review-system-2021"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt onbt">
                                            View Code
                                        </span>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};