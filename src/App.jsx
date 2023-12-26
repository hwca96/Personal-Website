import "./App.css";
import Education from "./components/Education";
import ParticleCanvas from "./components/Particles";
import SocialTabs from "./components/SocialTabs";
import Experiences from "./components/Experiences";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TypingText from "./components/TypingText";



function App() {
  return (
    <>
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
        <Experiences/>
        <a id="education" className="anchor"></a>
        <Education/>
        <a id="skills" className="anchor"></a>
        <Skills/>
        <a id="projects" className="anchor"></a>
        <Projects/>
      </div>
    </>
  );
}

export default App;
