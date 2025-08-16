import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
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

  const timelineData = [
    {
      date: "July 2025 - Present",
      icon: <WorkIcon />,
      title: "Full Stack Developer",
      subtitle: "Skate Canada",
      category: "work",
      description:
        "Developing and maintaining Skate Canada's internal scoring platform, delivering secure, high-performance, and scalable solutions for real-time competition scoring and analytics.",
      responsibilities: [
        "Designing and implementing responsive frontend interfaces for judges, referees, and administrators to manage live scoring efficiently.",
        "Building and optimizing backend services with real-time communication via WebSockets for instant score updates and notifications.",
        "Managing cloud infrastructure and database systems to ensure high availability, fault tolerance, and smooth scaling during events.",
      ],
      technologies: ["frontend", "backend", "database", "cloud", "devops", "sockets"],
    },

    {
      date: "September 2023 - Present",
      icon: <WorkIcon />,
      title: "Full Stack Developer",
      subtitle: "AltQ Finance Services",
      category: "work",
      description:
        "Driving end-to-end full-stack development for complex fintech applications, focusing on building high-performance, secure, and scalable solutions in a fast-paced environment.",
      responsibilities: [
        "Leading the design and development of robust, responsive financial dashboards that empower data-driven decision-making.",
        "Architecting and integrating AI-powered authentication mechanisms to enhance security and user experience.",
        "Optimizing backend services, ensuring high availability, fault tolerance, and seamless scalability across global infrastructure.",
      ],
      technologies: ["frontend", "backend", "database", "cloud", "devops", "AI", "mobile app"],
    },
    {
      date: "September 2022 - Present",
      icon: <SchoolIcon />,
      title: "Master's of Applied Computer Science",
      subtitle: "Concordia University",
      category: "education",
      description:
        "Pursuing advanced studies in computer science with a focus on cloud computing, distributed systems, and algorithm optimization to solve complex, real-world problems.",
      achievements: [
        "Maintaining a perfect 4.0 GPA while balancing demanding coursework and independent research projects.",
        "Conducting cutting-edge research on cloud-native architectures, distributed data processing, and the scalability of microservices.",
        "Deepening expertise in advanced system design, algorithms, and high-performance computing through specialized coursework.",
      ],
      specializations: ["Cloud Computing", "Distributed Systems", "Advanced Algorithms", "Software Engineering", "Web Development"],
    },
    {
      date: "July 2021 - August 2022",
      icon: <WorkIcon />,
      title: "Graduate Engineer Trainee",
      subtitle: "Nokia Solutions & Networks",
      category: "work",
      description:
        "Developed automation solutions and optimized network infrastructure for mobile networks, delivering enhanced system performance and reliability in large-scale telecom environments.",
      responsibilities: [
        "Designed and implemented scalable automation frameworks for network monitoring and management, reducing manual intervention and error rates.",
        "Led efforts to streamline network operations, resulting in a 40% improvement in system efficiency and uptime.",
        "Developed and deployed comprehensive monitoring solutions to proactively identify and mitigate potential issues across the network infrastructure.",
      ],
      technologies: [ "Docker", "Kubernetes", "Python", "Shell Scripting", "Network Protocols", "Cloud Services"],
    },
    {
      date: "July 2017 - June 2021",
      icon: <SchoolIcon />,
      title: "Bachelor's in Computer Engineering",
      subtitle: "Sardar Vallabhbhai Patel Institute of Technology",
      category: "education",
      description:
        "Graduated with a focus on software engineering principles, modern development practices, and the latest trends in emerging technologies like blockchain and web development.",
      achievements: [
        "Graduated with First Class Honors, securing distinction for academic excellence and project leadership.",
        "Led a multi-disciplinary blockchain research project aimed at exploring real-world applications for decentralized systems.",
        "Served as Technical Committee Head, organizing workshops and fostering a collaborative environment for fellow students.",
      ],
      specializations: ["Software Engineering", "Blockchain Technology", "Web Development"],
    },
  ];


  const commonStyles = {
    contentStyle: {
      background: 'var(--clr-bg)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      border: '1px solid rgba(var(--clr-primary-rgb), 0.1)',
      padding: '1.5rem',
    },
    contentArrowStyle: {
      borderRight: '7px solid var(--clr-bg)',
    },
    iconStyle: {
      background: 'var(--clr-bg)',
      boxShadow: '0 0 0 3px var(--clr-primary)',
      color: 'var(--clr-primary)',
    },
  };

  return (
    <section id="journey" className="journey-section">
      <div className="section-header">
        <h2 className="section__title">Professional Journey</h2>
        <p className="section__subtitle">Career Milestones and Academic Achievements</p>
      </div>

      <VerticalTimeline lineColor={lineColor}>
        {timelineData.map((item, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={item.date}
            dateClassName="timeline-date"
            {...commonStyles}
            icon={item.icon}
          >
            <div className={`timeline-content ${item.category}`}>
              <h3 className="timeline-title">{item.title}</h3>
              <h4 className="timeline-subtitle">{item.subtitle}</h4>
              <p className="timeline-description">{item.description}</p>

              {item.responsibilities && (
                <div className="timeline-details">
                  <h5>Key Responsibilities:</h5>
                  <ul>
                    {item.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )}

              {item.achievements && (
                <div className="timeline-details">
                  <h5>Achievements:</h5>
                  <ul>
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="timeline-tags">
                {(item.technologies || item.specializations)?.map((tech, i) => (
                  <span key={i} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};
