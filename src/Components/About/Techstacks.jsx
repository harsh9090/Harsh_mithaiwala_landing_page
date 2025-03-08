import React from "react";
import "./Techstacks.css";
import { FaReact, FaAngular, FaAws, FaGitAlt, FaLinux, FaBrain, FaCode, FaDatabase, FaTools, FaRocket } from "react-icons/fa";
import {
    SiRedux, SiHtml5, SiNodedotjs, SiPostman, SiExpress, SiMongodb,
    SiJavascript, SiMysql, SiPython, SiJava, SiTypescript,
    SiDocker, SiKubernetes, SiFirebase, SiMaterialui, SiSpringboot,
    SiTailwindcss, SiPostgresql, SiAuth0, SiGooglecloud,
    SiNextdotjs, SiTensorflow, SiPytorch, SiJenkins
} from "react-icons/si";
import { DiCss3, DiScrum } from "react-icons/di";
import { BsGearFill, BsLightningChargeFill } from "react-icons/bs";

const skillStats = {
    totalYears: 3,
    expertSkills: 8,
    projectsCompleted: 10,
    technologies: 25
};

const categoryIcons = {
    "Frontend & UI": <FaCode />,
    "Backend & APIs": <FaRocket />,
    "Data & Cloud": <FaDatabase />,
    "DevOps & Tools": <FaTools />,
    "AI & ML": <FaBrain />
};

const skillCategories = [
    {
        title: "Frontend & UI",
        skills: [
            { icon: <SiJavascript />, name: "JavaScript", level: "Expert" },
            { icon: <FaReact />, name: "React", level: "Expert" },
            { icon: <SiNextdotjs />, name: "Next.js", level: "Advanced" },
            { icon: <SiRedux />, name: "Redux", level: "Advanced" },
            { icon: <FaAngular />, name: "Angular", level: "Advanced" },
            { icon: <SiHtml5 />, name: "HTML5", level: "Expert" },
            { icon: <DiCss3 />, name: "CSS3", level: "Expert" },
            { icon: <SiMaterialui />, name: "MUI", level: "Advanced" },
            { icon: <SiTailwindcss />, name: "Tailwind", level: "Advanced" },
        ]
    },
    {
        title: "Backend & APIs",
        skills: [
            { icon: <SiNodedotjs />, name: "Node.js", level: "Expert" },
            { icon: <SiExpress />, name: "Express", level: "Advanced" },
            { icon: <SiSpringboot />, name: "Spring", level: "Advanced" },
            { icon: <SiJava />, name: "Java", level: "Advanced" },
            { icon: <SiPython />, name: "Python", level: "Advanced" },
            { icon: <SiTypescript />, name: "TypeScript", level: "Advanced" },
            { icon: <SiAuth0 />, name: "Auth0", level: "Advanced" },
        ]
    },
    {
        title: "Data & Cloud",
        skills: [
            { icon: <SiMysql />, name: "MySQL", level: "Advanced" },
            { icon: <SiMongodb />, name: "MongoDB", level: "Advanced" },
            { icon: <SiPostgresql />, name: "PostgreSQL", level: "Advanced" },
            { icon: <SiFirebase />, name: "Firebase", level: "Advanced" },
            { icon: <FaAws />, name: "AWS", level: "Intermediate" },
            { icon: <SiGooglecloud />, name: "GCP", level: "Intermediate" },
        ]
    },
    {
        title: "DevOps & Tools",
        skills: [
            { icon: <SiDocker />, name: "Docker", level: "Advanced" },
            { icon: <SiKubernetes />, name: "K8s", level: "Intermediate" },
            { icon: <SiJenkins />, name: "Jenkins", level: "Intermediate" },
            { icon: <FaGitAlt />, name: "Git", level: "Expert" },
            { icon: <FaLinux />, name: "Linux", level: "Advanced" },
            { icon: <SiPostman />, name: "Postman", level: "Expert" },
        ]
    },
    {
        title: "AI & ML",
        skills: [
            { icon: <SiTensorflow />, name: "TensorFlow", level: "Intermediate" },
            { icon: <SiPytorch />, name: "PyTorch", level: "Intermediate" },
            { icon: <BsGearFill />, name: "ML Models", level: "Intermediate" },
            { icon: <DiScrum />, name: "Agile", level: "Advanced" },
        ]
    }
];

export const Techstacks = () => {
    return (
        <section className="techstacks-section" data-aos="fade-up">
            <div className="skills-header">
                <h2 className="section__title">
                    Technical <span className="highlight">Arsenal</span>
                </h2>
                <p className="section__subtitle">
                    Crafting digital experiences with modern technologies
                </p>

                <div className="skill-stats">
                    <div className="stat-item">
                        <BsLightningChargeFill className="stat-icon" />
                        <div className="stat-info">
                            <span className="stat-number">{skillStats.expertSkills}</span>
                            <span className="stat-label">Expert Skills</span>
                        </div>
                    </div>
                    <div className="stat-item">
                        <FaCode className="stat-icon" />
                        <div className="stat-info">
                            <span className="stat-number">{skillStats.technologies}+</span>
                            <span className="stat-label">Technologies</span>
                        </div>
                    </div>
                    <div className="stat-item">
                        <FaRocket className="stat-icon" />
                        <div className="stat-info">
                            <span className="stat-number">{skillStats.projectsCompleted}+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                    </div>
                    <div className="stat-item">
                        <FaBrain className="stat-icon" />
                        <div className="stat-info">
                            <span className="stat-number">{skillStats.totalYears}+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skills-container">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skill-category">
                        <h3 className="category-title">
                            <span className="category-icon">{categoryIcons[category.title]}</span>
                            {category.title}
                        </h3>
                        <div className="skills-grid">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="skill-item" data-level={skill.level}>
                                    <div className="skill-icon">{skill.icon}</div>
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
