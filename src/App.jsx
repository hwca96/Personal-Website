import "./App.css";
import { Container, Stack } from "react-bootstrap";
import Education from "./components/Education";
import ParticleCanvas from "./components/Particles";
import SocialTabs from "./components/SocialTabs";
import Experiences from "./components/Experiences";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <NavBar />
      <div id="particles">
      <SocialTabs />
        <ParticleCanvas />
        <h1 id="title-text"> Harvey Wu </h1>
      </div>
      <div id="resume">
        <Experiences />
        <Education />
        <Projects />
        <Skills />
      </div>
    </>
  );
}

export default App;
