import React from "react";
import "./Projects.css";
import { FaAngular, FaNodeJs } from "react-icons/fa";
import {
    SiAndroid,
    SiAngular as SiAngularIcon,
    SiCss3,
    SiEthereum,
    SiExpress,
    SiFirebase,
    SiJava,
    SiJavascript,
    SiMaterialui,
    SiMysql,
    SiPhp,
    SiPostgresql,
    SiPython,
    SiPytorch,
    SiSolidity,
    SiSpringboot,
    SiTailwindcss,
    SiTensorflow,
    SiXampp,
} from "react-icons/si";

export const Projects = () => {
    // Array of project data objects
    const projectsData = [
        {
            title: "expense-tracker",
            description:
                "Expense Tracker is a full-stack web app for managing income, expenses, and generating monthly financial summaries with authentication and security. 🚀",
            imgSrc: "/expense-tracker.png",
            alt: "expense-tracker",
            techIcons: [
                <SiSpringboot key="springboot" />,
                <FaAngular key="angular" />,
                <SiPostgresql key="postgresql" />,
                <SiTailwindcss key="tailwindcss" />,
                <SiJava key="java" />,
            ],
            codeLink: "https://expense-tracker-frontend-tool.netlify.app/",
            buttonText: "Go Live",
        },
        {
            title: "live-posts",
            description:
                "Developed a community-driven web app similar to Instagram for posting, viewing, and interacting with user content using Angular and Firebase.",
            imgSrc: "/Project1.png",
            alt: "live-posts",
            techIcons: [
                <SiFirebase key="firebase" />,
                <SiExpress key="express" />,
                <FaAngular key="angular" />,
                <FaNodeJs key="nodejs" />,
            ],
            codeLink: "https://live-posts-dce78.web.app/home",
            buttonText: "Go Live",
        },
        {
            title: "RainSense AI",
            description:
                "Developed RainSenseAI, a machine learning project for accurate rain prediction using Decision Trees and Deep Neural Networks.",
            imgSrc: "/AI.png",
            alt: "rainRainSense_AI",
            techIcons: [
                <SiTensorflow key="tensorflow" />,
                <SiPytorch key="pytorch" />,
                <SiPython key="python" />,
            ],
            codeLink: "https://github.com/darshak-k/RainSenseAI-Project",
            buttonText: "View Code",
        },
        {
            title: "Covid Management System",
            description:
                "Built a PHP and MySQL system for tracking patient statuses, managing recovery data, and providing doctors with an admin panel for comprehensive hospital management.",
            imgSrc: "/Project2.png",
            alt: "covidProject",
            techIcons: [
                <SiPhp key="php" />,
                <SiMysql key="mysql" />,
                <SiJavascript key="javascript" />,
                <SiCss3 key="css3" />,
                <SiXampp key="xampp" />,
            ],
            codeLink: "https://github.com/harsh9090/Covid_management_system",
            buttonText: "View Code",
        },
        {
            title: "News Application",
            description:
                "Developed an Android news app using NewsAPI, featuring live news display, viewing, sharing, and more with Glide for images and Material Design.",
            imgSrc: "/news_app.png",
            alt: "News Application",
            techIcons: [<SiAndroid key="android" />],
            codeLink: "https://github.com/kpanwala/News-App",
            buttonText: "View Code",
        },
        {
            title: "DecentraReview",
            description:
                "Developed a decentralized review system using Ethereum blockchain to ensure tamper-proof and permanently secure user feedback.",
            imgSrc: "/blockchain.png",
            alt: "DecentraReview",
            techIcons: [
                <SiAngularIcon key="angular2" />,
                <SiEthereum key="ethereum" />,
                <SiFirebase key="firebase2" />,
                <SiMaterialui key="materialui" />,
                <SiJavascript key="javascript2" />,
                <SiSolidity key="solidity" />,
            ],
            codeLink:
                "https://github.com/harsh9090/blockchain-review-system-2021",
            buttonText: "View Code",
        },
    ];

    return (
        <div className="section">
            <h2 className="section__title different">Projects</h2>
            <div className="allProjects">
                {projectsData.map((project, index) => (
                    <div className="projects_container" data-aos="fade-right" key={index}>
                        <div className="project">
                            <div className="project_videocontainer">
                                <div className="project-image-container">
                                    <img
                                        src={project.imgSrc}
                                        alt={project.alt}
                                        style={{
                                            maxWidth: "100%",
                                            maxHeight: "100%",
                                            objectFit: "contain", // Keeps original aspect ratio without stretching
                                            display: "block",
                                            margin: "0 auto", // Center horizontally
                                        }}
                                    />
                                </div>

                            </div>
                            <div className="project_information">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <div>{project.techIcons}</div>
                                <div>
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
                                            {project.buttonText}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
