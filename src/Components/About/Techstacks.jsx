import React, { useState } from "react";
import "./Techstacks.css";
import { FaReact, FaAngular, FaAws, FaGitAlt, FaLinux, FaBrain, FaCode, FaDatabase, FaTools, FaRocket, FaChartLine, FaLightbulb, FaUsers, FaClock } from "react-icons/fa";
import {
    SiRedux, SiHtml5, SiNodedotjs, SiPostman, SiExpress, SiMongodb,
    SiJavascript, SiMysql, SiPython, SiJava, SiTypescript,
    SiDocker, SiKubernetes, SiFirebase, SiMaterialui, SiSpringboot,
    SiTailwindcss, SiPostgresql, SiAuth0, SiGooglecloud,
    SiNextdotjs, SiTensorflow, SiPytorch, SiJenkins
} from "react-icons/si";
import { DiCss3, DiScrum } from "react-icons/di";
import { BsGearFill, BsLightningChargeFill, BsArrowRight } from "react-icons/bs";

const skillStats = {
    totalYears: 3,
    expertSkills: 8,
    projectsCompleted: 10,
    technologies: 25
};

const skillCategories = [
    {
        title: "Frontend & UI",
        icon: <FaCode />,
        description: "Creating responsive, intuitive user interfaces",
        color: "var(--clr-primary)",
        skills: [
            { icon: <SiJavascript />, name: "JavaScript", level: "Expert", experience: "3+ years" },
            { icon: <FaReact />, name: "React", level: "Expert", experience: "2+ years" },
            { icon: <SiNextdotjs />, name: "Next.js", level: "Advanced", experience: "2+ years" },
            { icon: <SiRedux />, name: "Redux", level: "Advanced", experience: "2+ years" },
            { icon: <FaAngular />, name: "Angular", level: "Advanced", experience: "1+ years" },
            { icon: <SiHtml5 />, name: "HTML5", level: "Expert", experience: "3+ years" },
            { icon: <DiCss3 />, name: "CSS3", level: "Expert", experience: "3+ years" },
            { icon: <SiMaterialui />, name: "MUI", level: "Advanced", experience: "2+ years" },
            { icon: <SiTailwindcss />, name: "Tailwind", level: "Advanced", experience: "2+ years" },
        ]
    },
    {
        title: "Backend & APIs",
        icon: <FaRocket />,
        description: "Building robust, scalable server-side solutions",
        color: "var(--clr-accent)",
        skills: [
            { icon: <SiNodedotjs />, name: "Node.js", level: "Expert", experience: "3+ years" },
            { icon: <SiExpress />, name: "Express", level: "Advanced", experience: "3+ years" },
            { icon: <SiSpringboot />, name: "Spring", level: "Advanced", experience: "1+ years" },
            { icon: <SiJava />, name: "Java", level: "Advanced", experience: "2+ years" },
            { icon: <SiPython />, name: "Python", level: "Advanced", experience: "2+ years" },
            { icon: <SiTypescript />, name: "TypeScript", level: "Advanced", experience: "2+ years" },
            { icon: <SiAuth0 />, name: "Auth0", level: "Advanced", experience: "2+ years" },
        ]
    },
    {
        title: "Data & Cloud",
        icon: <FaDatabase />,
        description: "Managing data and cloud infrastructure",
        color: "var(--clr-optional)",
        skills: [
            { icon: <SiMysql />, name: "MySQL", level: "Advanced", experience: "2+ years" },
            { icon: <SiMongodb />, name: "MongoDB", level: "Advanced", experience: "2+ years" },
            { icon: <SiPostgresql />, name: "PostgreSQL", level: "Advanced", experience: "2+ years" },
            { icon: <SiFirebase />, name: "Firebase", level: "Advanced", experience: "2+ years" },
            { icon: <FaAws />, name: "AWS", level: "Intermediate", experience: "1+ years" },
            { icon: <SiGooglecloud />, name: "GCP", level: "Intermediate", experience: "1+ years" },
        ]
    },
    {
        title: "DevOps & Tools",
        icon: <FaTools />,
        description: "Streamlining development and deployment",
        color: "var(--clr-primary)",
        skills: [
            { icon: <SiDocker />, name: "Docker", level: "Advanced", experience: "2+ years" },
            { icon: <SiKubernetes />, name: "K8s", level: "Intermediate", experience: "1+ years" },
            { icon: <SiJenkins />, name: "Jenkins", level: "Intermediate", experience: "1+ years" },
            { icon: <FaGitAlt />, name: "Git", level: "Expert", experience: "3+ years" },
            { icon: <FaLinux />, name: "Linux", level: "Advanced", experience: "2+ years" },
            { icon: <SiPostman />, name: "Postman", level: "Expert", experience: "3+ years" },
        ]
    },
    {
        title: "AI & ML",
        icon: <FaBrain />,
        description: "Exploring intelligent solutions and automation",
        color: "var(--clr-accent)",
        skills: [
            { icon: <SiTensorflow />, name: "TensorFlow", level: "Intermediate", experience: "1+ years" },
            { icon: <SiPytorch />, name: "PyTorch", level: "Intermediate", experience: "1+ years" },
            { icon: <BsGearFill />, name: "ML Models", level: "Intermediate", experience: "1+ years" },
            { icon: <DiScrum />, name: "Agile", level: "Advanced", experience: "2+ years" },
        ]
    }
];

export const Techstacks = () => {
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const getLevelColor = (level) => {
        switch(level) {
            case 'Expert': return 'var(--clr-primary)';
            case 'Advanced': return 'var(--clr-accent)';
            case 'Intermediate': return 'var(--clr-optional)';
            default: return 'var(--clr-fg-alt)';
        }
    };

    const getLevelBadge = (level) => {
        return (
            <span className="level-badge" style={{ backgroundColor: getLevelColor(level) }}>
                {level}
            </span>
        );
    };

    return (
        <section className="techstacks-section" id="techstack">
            <div className="techstacks-container">
                {/* Header Section */}
                <div className="skills-header" data-aos="fade-up">
                    <div className="header-content">
                        <h2 className="section-title">
                            Technical <span className="accent-text">Expertise</span>
                        </h2>
                        <p className="section-subtitle">
                            A comprehensive toolkit of modern technologies and frameworks that power innovative solutions
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="skill-stats" data-aos="fade-up" data-aos-delay="200">
                        <div className="stat-item">
                            <div className="stat-icon-wrapper">
                                <BsLightningChargeFill className="stat-icon" />
                            </div>
                            <div className="stat-info">
                                <span className="stat-number">{skillStats.expertSkills}</span>
                                <span className="stat-label">Expert Skills</span>
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon-wrapper">
                                <FaCode className="stat-icon" />
                            </div>
                            <div className="stat-info">
                                <span className="stat-number">{skillStats.technologies}+</span>
                                <span className="stat-label">Technologies</span>
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon-wrapper">
                                <FaRocket className="stat-icon" />
                            </div>
                            <div className="stat-info">
                                <span className="stat-number">{skillStats.projectsCompleted}+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon-wrapper">
                                <FaClock className="stat-icon" />
                            </div>
                            <div className="stat-info">
                                <span className="stat-number">{skillStats.totalYears}+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Showcase */}
                <div className="skills-showcase" data-aos="fade-up" data-aos-delay="400">
                    {/* Category Navigation */}
                    <div className="category-navigation">
                        {skillCategories.map((category, index) => (
                            <button
                                key={index}
                                className={`category-nav-item ${selectedCategory === index ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(index)}
                                style={{ '--category-color': category.color }}
                            >
                                <span className="nav-icon">{category.icon}</span>
                                <span className="nav-title">{category.title}</span>
                                {selectedCategory === index && <BsArrowRight className="nav-arrow" />}
                            </button>
                        ))}
                    </div>

                    {/* Skills Display */}
                    <div className="skills-display">
                        <div className="category-info">
                            <h3 className="category-title">
                                <span className="category-icon" style={{ color: skillCategories[selectedCategory].color }}>
                                    {skillCategories[selectedCategory].icon}
                                </span>
                                {skillCategories[selectedCategory].title}
                            </h3>
                            <p className="category-description">
                                {skillCategories[selectedCategory].description}
                            </p>
                        </div>

                        <div className="skills-grid">
                            {skillCategories[selectedCategory].skills.map((skill, skillIndex) => (
                                <div 
                                    key={skillIndex} 
                                    className={`skill-item ${hoveredSkill === skillIndex ? 'hovered' : ''}`}
                                    onMouseEnter={() => setHoveredSkill(skillIndex)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                    data-aos="zoom-in"
                                    data-aos-delay={skillIndex * 100}
                                >
                                    <div className="skill-header">
                                        <div className="skill-icon" style={{ color: skillCategories[selectedCategory].color }}>
                                            {skill.icon}
                                        </div>
                                        {getLevelBadge(skill.level)}
                                    </div>
                                    <h4 className="skill-name">{skill.name}</h4>
                                    <p className="skill-experience">{skill.experience}</p>
                                    
                                    <div className="skill-details">
                                        <div className="skill-level">
                                            <span className="level-label">Proficiency:</span>
                                            <span className="level-value" style={{ color: getLevelColor(skill.level) }}>
                                                {skill.level}
                                            </span>
                                        </div>
                                        <div className="skill-usage">
                                            <span className="usage-label">Experience:</span>
                                            <span className="usage-value">{skill.experience}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional Skills */}
                <div className="additional-skills" data-aos="fade-up" data-aos-delay="600">
                    <h3 className="additional-title">
                        <FaLightbulb className="title-icon" />
                        Additional Competencies
                    </h3>
                    <div className="competency-tags">
                        <span className="competency-tag">Problem Solving</span>
                        <span className="competency-tag">System Design</span>
                        <span className="competency-tag">Code Review</span>
                        <span className="competency-tag">Technical Leadership</span>
                        <span className="competency-tag">Mentoring</span>
                        <span className="competency-tag">Agile Methodologies</span>
                        <span className="competency-tag">Performance Optimization</span>
                        <span className="competency-tag">Security Best Practices</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
