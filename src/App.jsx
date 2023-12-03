import "./App.css";
import { Container, Stack } from "react-bootstrap";
import Education from "./components/Education";
import ParticleCanvas from "./components/Particles";
import SocialTabs from "./components/SocialTabs";
import Experiences from "./components/Experiences";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Typed from 'typed.js'
import TypingText from "./components/TypingText";



function App() {
  return (
    <>
      <NavBar />
      <div id="particles">
      <SocialTabs />
        <ParticleCanvas />
        <div className="title-container" id="title-text">
          <h1 className="title"> Harvey Wu </h1>
            <TypingText />
        </div>
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
// const typed = new Typed('#typing-element', {
//   strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
//   typeSpeed: 50,
// });

export default App;
