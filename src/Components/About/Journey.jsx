import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarRateIcon from "@material-ui/icons/StarRate";
import CodeIcon from "@material-ui/icons/Code";
import { ThemeContext } from "../../Context/theme";
import "./Journey.css";

export const Journey = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [lineColor, setLineColor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setLineColor("#fcfcfc");
    } else {
      setLineColor("#23283e");
    }
  }, [themename]);

  // Timeline data with enhanced structure
  const timelineData = [
    {
      date: "September 2023 - Present",
      icon: <WorkIcon />,
      title: "Full Stack Developer",
      subtitle: "AltQ Finance Services",
      category: "work",
      skills: ["Next.js", "Node.js", "MongoDB", "Auth0", "Material-UI"],
      highlights: [
        "Developed responsive financial dashboards",
        "Implemented AI-driven authentication",
        "Optimized backend performance",
      ],
      description:
        "Leading full-stack development with a focus on fintech solutions. Building secure, scalable applications using modern technologies and best practices.",
    },
    {
      date: "September 2022 - Present",
      icon: <SchoolIcon />,
      title: "Master's Of Applied Computer Science",
      subtitle: "Concordia University",
      category: "education",
      skills: ["Cloud Computing", "Big Data", "Algorithms", "System Programming"],
      highlights: [
        "4.0 GPA Maintained",
        "Research in Cloud Technologies",
        "Advanced Algorithm Design",
      ],
      description:
        "Pursuing advanced studies in computer science, specializing in cloud computing and distributed systems. Engaging in cutting-edge research and practical projects.",
    },
    {
      date: "July 2021 - August 2022",
      icon: <WorkIcon />,
      title: "Graduate Engineer Trainee",
      subtitle: "Nokia Solutions & Networks",
      category: "work",
      skills: ["Python", "Bash", "Network Configuration", "Cloud Services"],
      highlights: [
        "Automated network management tasks",
        "Improved system efficiency by 40%",
        "Implemented monitoring solutions",
      ],
      description:
        "Managed mobile network infrastructure and developed automation solutions for network optimization and monitoring.",
    },
    {
      date: "July 2017 - June 2021",
      icon: <SchoolIcon />,
      title: "Computer Engineer",
      subtitle: "Sardar Vallabhbhai Patel Institute Of Technology",
      category: "education",
      skills: ["Blockchain", "Software Engineering", "Web Development"],
      highlights: [
        "First Class with Distinction",
        "Blockchain Project Lead",
        "Technical Committee Head",
      ],
      description:
        "Completed bachelor's degree with focus on modern software development practices and emerging technologies.",
    },
    {
      date: "Sept 2020 - Oct 2020",
      icon: <CodeIcon />,
      title: "Front End Developer Intern",
      subtitle: "Supero Software",
      category: "internship",
      skills: ["Angular", "MaterializeCSS", "REST APIs", "JavaScript"],
      highlights: [
        "Built reusable UI components",
        "Integrated dynamic content",
        "Enhanced user experience",
      ],
      description:
        "Developed modern web interfaces and implemented responsive design patterns for enhanced user engagement.",
    },
    {
      date: "April 2020 - Sept 2020",
      icon: <CodeIcon />,
      title: "Web Developer Intern",
      subtitle: "Curiosum Technologies",
      category: "internship",
      skills: ["Google Apps Script", "JavaScript", "Event-Driven Architecture", "Pub/Sub Pattern"],
      highlights: [
        "Automated data processing with Google Apps Script",
        "Built event-driven systems with pub/sub pattern",
      ],
      description:
        "Automated workflows using Google Apps Script and implemented event-driven architecture to improve efficiency.",
    },
  ];

  const commonStyles = {
    contentStyle: {
      background: 'transparent',
      // border: '2px solid var(--clr-primary)',
      borderRadius: '16px',
      boxShadow: 'var(--shadow)',
      paddingTop: '-2rem',
      // padding: '2rem',
    },
    contentArrowStyle: {
      borderRight: '10px solid var(--clr-primary)',
    },
    iconStyle: {
      background: 'var(--clr-bg)',
      border: '3px solid var(--clr-primary)',
      boxShadow: 'var(--shadow)',
      color: 'var(--clr-primary)',
    },
  };

  return (
    <section className="journey-section section">
      <div className="section-header" data-aos="fade-down">
        <h2 className="section__title">
          My Professional <span className="different">Journey</span>
        </h2>
        <p className="section__subtitle">
          A timeline of my professional growth and achievements
        </p>
      </div>

      <VerticalTimeline lineColor={lineColor}>
        {timelineData.map((item, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={item.date}
            dateClassName="timeline-date"
            contentStyle={commonStyles.contentStyle}
            contentArrowStyle={commonStyles.contentArrowStyle}
            iconStyle={commonStyles.iconStyle}
            icon={item.icon}
          >
            <div className={`timeline-content ${item.category}`}>
              <div className="timeline-header">
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-subtitle">{item.subtitle}</h4>
              </div>

              <p className="timeline-description">{item.description}</p>

              <div className="timeline-highlights">
                {item.highlights.map((highlight, i) => (
                  <div key={i} className="highlight-item">
                    <span className="highlight-bullet">▹</span>
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="timeline-skills">
                {item.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={commonStyles.iconStyle}
          icon={<StarRateIcon />}
        />
      </VerticalTimeline>
    </section>
  );
};
