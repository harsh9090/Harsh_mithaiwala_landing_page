import "./App.css";
import React from "react";
import { ThemeContext } from "./Context/theme";
import Aos from "aos";
import { Header } from "./Components/Header/Header";
import { About } from "./Components/About/About";
import { Journey } from "./Components/About/Journey";
import { Techstacks } from "./Components/About/Techstacks";
import { Projects } from "./Components/Projects/Projects";
import GetInTouch from "./Components/GetInTouch/GetInTouch";
import { Footer } from "./Components/Footer/Footer";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";

function App() {
  const [{ themename }] = React.useContext(ThemeContext);

  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div id="top" className={`${themename} app`}>
      {/* Animated Bubbles Background */}

      <section id="about">
        <Header />
      </section>

      <main>
        <br />
        <br />
        <br />
        <br />
        <About id="home" />
        <br />
        <br />
        <section id="journey" style={{ paddingTop: "40px" }}>
          <Journey />
        </section>
        <br />
        <br />
        <section id="techstack" style={{ paddingTop: "40px" }}>
          <Techstacks />
        </section>
        <br />
        <br />
        <section id="projects" style={{ paddingTop: "10px" }}>
          <Projects />
        </section>
        <br />
        <section id="contact">
          <GetInTouch />
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
