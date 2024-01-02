import Education from "./Education";
import ParticleCanvas from "./Particles";
import SocialTabs from "./SocialTabs";
import Experiences from "./Experiences";
import NavBar from "./Navbar";
import Skills from "./Skills";
import TypingText from "./TypingText";
import Projects from "./Projects";

function HomePage() {
  return (
    <div>
      <NavBar />
      <div id="particles">
        <SocialTabs />
        <ParticleCanvas />
        <div className="title-container" id="title-text">
          <h1 className="main-name"> Harvey Wu </h1>
          <TypingText />
        </div>
      </div>
      <div id="resume">
        <a id="experiences" className="anchor"></a>
        <Experiences />
        <a id="education" className="anchor"></a>
        <Education />
        <a id="skills" className="anchor"></a>
        <Skills />
        <a id="projects" className="anchor"></a>
        <Projects/>
        <div className="bottom"></div>
      </div>
    </div>
  );
}

export default HomePage;
