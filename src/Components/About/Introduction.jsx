import React, { useContext } from "react";
import "./Introduction.css";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/ProfPic.jpg";


export const Introduction = () => {
  const [{ themename }] = useContext(ThemeContext);

  return (
    <>
      <section>
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              {/* <img src={profilePic} alt="Images" /> */}
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone 👋I am passionate about continuous learning and thrive in environments that challenge me to grow every day. Web development captivates me because it evolves rapidly, offering new opportunities to learn and innovate. One of my proudest achievements is developing a decentralized blockchain-based review system, demonstrating my ability to solve complex problems. Pursuing a Master of Engineering in Applied Computer Science has equipped me with advanced knowledge in cloud computing, distributed systems, and AI. In the short term, I aim to explore new technologies and gain insights from colleagues, while my long-term goal is to find a stable company that offers a balanced and engaging work environment. Outside of work, I enjoy watching cricket and football and solving puzzles, activities that enhance my problem-solving skills. I am eager to contribute to innovative projects and continue my journey in the tech world.


              </h4>
            </div>

          </div>

        </div>
      </section>

    </>
  );
};