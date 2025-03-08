import React, { useState } from "react";
import "./Projects.css";
import { FaAngular, FaNodeJs, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
    SiAndroid, SiAngular, SiCss3, SiEthereum, SiExpress,
    SiFirebase, SiJava, SiJavascript, SiMaterialui,
    SiMysql, SiPhp, SiPostgresql, SiPython, SiPytorch,
    SiSolidity, SiSpringboot, SiTailwindcss, SiTensorflow,
    SiXampp
} from "react-icons/si";

const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
    { id: "ai", label: "AI/ML" },
    { id: "blockchain", label: "Blockchain" }
];

const projectsData = [
    {
        title: "Expense Tracker",
        category: "web",
        description: "Full-stack web application for managing personal finances with detailed analytics and secure authentication.",
        features: [
            "Monthly financial summaries and trends",
            "Multi-currency support",
            "Secure authentication and authorization",
            "Responsive dashboard with charts"
        ],
        imgSrc: "/expense-tracker.png",
        alt: "expense-tracker",
        techStack: [
            { icon: <SiSpringboot />, name: "Spring Boot" },
            { icon: <FaAngular />, name: "Angular" },
            { icon: <SiPostgresql />, name: "PostgreSQL" },
            { icon: <SiTailwindcss />, name: "Tailwind" },
            { icon: <SiJava />, name: "Java" }
        ],
        liveLink: "https://expense-tracker-frontend-tool.netlify.app/",
        codeLink: "https://github.com/yourusername/expense-tracker"
    },
    {
        title: "Live Posts",
        category: "web",
        description: "A community-driven social platform for sharing and interacting with user-generated content.",
        features: [
            "Real-time content updates",
            "Interactive user engagement",
            "Image upload and processing",
            "Social sharing capabilities"
        ],
        imgSrc: "/Project1.png",
        alt: "live-posts",
        techStack: [
            { icon: <SiFirebase />, name: "Firebase" },
            { icon: <SiExpress />, name: "Express" },
            { icon: <FaAngular />, name: "Angular" },
            { icon: <FaNodeJs />, name: "Node.js" }
        ],
        liveLink: "https://live-posts-dce78.web.app/home",
        codeLink: "https://github.com/yourusername/live-posts"
    },
    {
        title: "RainSense AI",
        category: "ai",
        description: "Advanced machine learning solution for accurate weather prediction using neural networks.",
        features: [
            "Decision tree-based prediction",
            "Deep neural network implementation",
            "Historical data analysis",
            "Real-time weather integration"
        ],
        imgSrc: "/AI.png",
        alt: "RainSense AI",
        techStack: [
            { icon: <SiTensorflow />, name: "TensorFlow" },
            { icon: <SiPytorch />, name: "PyTorch" },
            { icon: <SiPython />, name: "Python" }
        ],
        codeLink: "https://github.com/darshak-k/RainSenseAI-Project"
    },
    {
        title: "Covid Management System",
        category: "web",
        description: "Comprehensive healthcare management system for tracking and managing COVID-19 cases.",
        features: [
            "Patient status tracking",
            "Recovery data management",
            "Admin dashboard for doctors",
            "Statistical reporting"
        ],
        imgSrc: "/Project2.png",
        alt: "Covid Management",
        techStack: [
            { icon: <SiPhp />, name: "PHP" },
            { icon: <SiMysql />, name: "MySQL" },
            { icon: <SiJavascript />, name: "JavaScript" },
            { icon: <SiCss3 />, name: "CSS3" },
            { icon: <SiXampp />, name: "XAMPP" }
        ],
        codeLink: "https://github.com/harsh9090/Covid_management_system"
    },
    {
        title: "News Application",
        category: "mobile",
        description: "Feature-rich Android news application with modern UI and real-time updates.",
        features: [
            "Live news integration",
            "Material Design UI",
            "Content sharing",
            "Offline reading support"
        ],
        imgSrc: "/news_app.png",
        alt: "News Application",
        techStack: [
            { icon: <SiAndroid />, name: "Android" },
            { icon: <SiJava />, name: "Java" },
            { icon: <SiMaterialui />, name: "Material UI" }
        ],
        
    },
    {
        title: "DecentraReview",
        category: "blockchain",
        description: "Blockchain-based review system ensuring transparency and immutability of user feedback.",
        features: [
            "Decentralized storage",
            "Smart contract integration",
            "Tamper-proof reviews",
            "Web3 authentication"
        ],
        imgSrc: "/blockchain.png",
        alt: "DecentraReview",
        techStack: [
            { icon: <SiAngular />, name: "Angular" },
            { icon: <SiEthereum />, name: "Ethereum" },
            { icon: <SiFirebase />, name: "Firebase" },
            { icon: <SiMaterialui />, name: "Material UI" },
            { icon: <SiSolidity />, name: "Solidity" }
        ],
        codeLink: "https://github.com/harsh9090/blockchain-review-system-2021"
    }
];

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [hoveredProject, setHoveredProject] = useState(null);

    const filteredProjects = projectsData.filter(project =>
        activeCategory === "all" ? true : project.category === activeCategory
    );

    return (
        <section className="projects-section section" data-aos="fade-up">
            <div className="projects-header">
                <h2 className="section__title">
                    Featured <span className="different">Projects</span>
                </h2>
                <p className="section__subtitle">
                    Showcasing my journey through code and creativity
                </p>

                <div className="project-categories">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <article
                        key={index}
                        className="project-card"
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="project-image-container">
                            <img
                                src={process.env.PUBLIC_URL + project.imgSrc}
                                alt={project.alt}
                                className="project-image"
                            />
                            <div className={`project-overlay ${hoveredProject === index ? 'active' : ''}`}>
                                <div className="project-links">
                                    {project.codeLink && (
                                        <a href={project.codeLink} target="_blank" rel="noreferrer" className="project-link">
                                            <FaGithub /> Code
                                        </a>
                                    )}
                                    {project.liveLink && (
                                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="project-link">
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-features">
                                {project.features.map((feature, idx) => (
                                    <span key={idx} className="feature-item">▹ {feature}</span>
                                ))}
                            </div>

                            <div className="tech-stack">
                                {project.techStack.map((tech, idx) => (
                                    <div key={idx} className="tech-item" title={tech.name}>
                                        {tech.icon}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};
