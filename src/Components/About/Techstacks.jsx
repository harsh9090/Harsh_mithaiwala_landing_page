import React, { useState } from "react";
import "./Techstacks.css";
import { FaReact, FaAngular, FaAws, FaCloud } from "react-icons/fa";
import {
    SiRedux, SiHtml5, SiNodedotjs, SiPostman, SiExpress, SiMongodb, SiAndroidstudio,
    SiJavascript, SiMysql, SiPython, SiJava, SiTypescript,
    SiDocker, SiKubernetes, SiHeroku, SiFirebase,
     SiVisualstudiocode, SiOpenai,
    SiMaterialui,
    SiAzuredevops,
    SiGnubash,
    SiSpringboot
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

const techStacks = [
    
    { id: 3, category: "frontend", icon: <SiJavascript />, label: "JavaScript" },
    { id: 4, category: "frontend", icon: <FaReact />, label: "React" },
    { id: 6, category: "frontend", icon: <SiRedux />, label: "Redux" },
    { id: 7, category: "frontend", icon: <FaAngular />, label: "Angular" },
    { id: 8, category: "frontend", icon: <BsBootstrap />, label: "Bootstrap" },
    { id: 9, category: "frontend", icon: <SiMaterialui />, label: "Material-UI" },
{ id: 1, category: "frontend", icon: <SiHtml5 />, label: "HTML" },
    { id: 2, category: "frontend", icon: <DiCss3 />, label: "CSS" },
    // Backend
    { id: 12, category: "backend", icon: <SiMysql />, label: "MySQL" },
    { id: 13, category: "backend", icon: <SiNodedotjs />, label: "Node.js" },

    { id: 40, category: "backend", icon: <SiSpringboot />, label: "Spring boot" },
    { id: 14, category: "backend", icon: <SiExpress />, label: "Express" },
    { id: 15, category: "backend", icon: <SiMongodb />, label: "MongoDB" },
    { id: 16, category: "backend", icon: <SiPython />, label: "Python" },
    { id: 17, category: "backend", icon: <SiJava />, label: "Java" },
    { id: 18, category: "backend", icon: <SiTypescript />, label: "TypeScript" },

    // DevOps & Cloud
    { id: 19, category: "devops", icon: <SiDocker />, label: "Docker" },
    { id: 20, category: "devops", icon: <SiKubernetes />, label: "Kubernetes" },
    { id: 21, category: "devops", icon: <SiAzuredevops />, label: "Azure" },
    { id: 22, category: "devops", icon: <SiHeroku />, label: "Heroku" },
{ id: 37, category: "devops", icon: <FaAws />, label: "AWS" },
    { id: 38, category: "devops", icon: <FaCloud />, label: "Cloud Services" },
    // Tools & Other
    { id: 26, category: "tools", icon: <VscGithub />, label: "GitHub" },
    { id: 28, category: "tools", icon: <SiPostman />, label: "Postman" },
    { id: 30, category: "tools", icon: <SiGnubash />, label: "Bash" },
    { id: 31, category: "tools", icon: <SiFirebase />, label: "Firebase" },
    { id: 32, category: "tools", icon: <SiVisualstudiocode />, label: "VS Code" },

    // Other
    { id: 33, category: "other", icon: <SiAndroidstudio />, label: "Android Studio" },
    { id: 39, category: "other", icon: <SiOpenai />, label: "OpenAI" }
];


export const Techstacks = () => {
    const [filter, setFilter] = useState("all");

    const handleFilterChange = (category) => {
        setFilter(category);
    };

    const filteredTechStacks = techStacks.filter((tech) =>
        filter === "all" ? true : tech.category === filter
    );

    return (
        <div className="section main" data-aos="fade-right">
            <h2 className="section__title different">TECH STACKS</h2>
            <div className="button-group">
                <button className="filter-button" onClick={() => handleFilterChange("all")}>All</button>
                <button className="filter-button" onClick={() => handleFilterChange("frontend")}>Frontend</button>
                <button className="filter-button" onClick={() => handleFilterChange("backend")}>Backend</button>
                <button className="filter-button" onClick={() => handleFilterChange("devops")}>DevOps</button>
                <button className="filter-button" onClick={() => handleFilterChange("tools")}>Tools</button>
                <button className="filter-button" onClick={() => handleFilterChange("other")}>Other</button>
            </div>
            <div className="techsection">
                {filteredTechStacks.map((tech) => (
                    <div key={tech.id} className="tech-item">
                        {tech.icon}
                        <h5>{tech.label}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};
