import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarRateIcon from "@material-ui/icons/StarRate";

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

  // Shared style objects (DRY)
  const commonContentStyle = {
    boxShadow: "var(--shadow)",
    border: "3px solid var(--clr-primary)",
    backgroundColor: "var(--clr-bg)",
    textAlign: "center",
    color: "var(--clr-fg-alt)",
  };

  const commonArrowStyle = {
    borderRight: "16px solid var(--clr-primary)",
  };

  const commonIconStyle = {
    border: "3px solid var(--clr-primary)",
    backgroundColor: "var(--clr-bg)",
    color: "var(--clr-primary)",
  };

  // Timeline data
  const timelineData = [
    {
      date: "September 2023 - Present",
      icon: <WorkIcon />,
      title: "Full Stack Developer",
      subtitle: "AltQ Finance Services",
      description:
        "I developed responsive UIs with Next.js and Material-UI. I optimized back-end services using Node.js, Express.js, and MongoDB for secure data transactions. A key feature I implemented was AI-driven user authentication with Auth0, enhancing security and user experience.",
    },
    {
      date: "September 2022 - Present",
      icon: <SchoolIcon />,
      title: "Master's Of Applied Computer Science",
      subtitle: "Concordia University",
      description:
        "Learned cloud computing, system programming, algorithms, networking, big data, and software testing. I completed various projects, applying these skills to real-world problems and exploring new technologies.",
    },
    {
      date: "July 2021 - August 2022",
      icon: <WorkIcon />,
      title: "Graduate Engineer Trainee",
      subtitle: "Nokia Solutions & Networks",
      description:
        "I managed mobile networks, automated tasks with Bash and Python, and configured networks using Nokia Cloud Service. I troubleshot issues with Wireshark and Traceroute.",
    },
    {
      date: "July 2017 - June 2021",
      icon: <SchoolIcon />,
      title: "Computer Engineer",
      subtitle: "Sardar Vallabhbhai Patel Institute Of Technology",
      description:
        "Focused on computer engineering with a capstone project that developed a blockchain-based review system, enhancing transparency and trust in digital feedback through decentralized technology.",
    },
    {
      date: "Sept 2020 - Oct 2020",
      icon: <WorkIcon />,
      title: "Front End Developer Intern",
      subtitle: "Supero Software",
      description:
        "Developed reusable UI components with Angular and MaterializeCSS, integrated REST APIs for dynamic content updates, and enhanced web app interactivity with JavaScript to boost user engagement and satisfaction.",
    },
    {
      date: "April 2020 - June 2020",
      icon: <WorkIcon />,
      title: "Web Development intern",
      subtitle: "Curiosum Tech. Ltd.",
      description:
        "Developed automation scripts with Google App Script for task streamlining, created event-driven and push-subscribe scripts for real-time updates in Google Apps, enhancing user interaction and process efficiency.",
    },
  ];

  return (
    <div className="section mainsection">
      <h2 className="section__title" data-aos="fade-right">
        My <span className="different">Journey</span>
      </h2>
      <VerticalTimeline lineColor={lineColor}>
        {timelineData.map((item, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={item.date}
            contentStyle={commonContentStyle}
            contentArrowStyle={commonArrowStyle}
            iconStyle={commonIconStyle}
            dateClassName="vertical-timeline-date"
            icon={item.icon}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              {item.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              {item.subtitle}
            </h4>
            <p data-aos="fade-right">{item.description}</p>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement icon={<StarRateIcon />} iconStyle={commonIconStyle} />
      </VerticalTimeline>
    </div>
  );
};
