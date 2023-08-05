import "./App.css";
import NavBar from "./Navbar";
import { Container, Stack } from "react-bootstrap";
import ParticleCanvas from "./Particles";

function App() {
  return (
    <>
      <NavBar />
      <div id="particles">
        <ParticleCanvas />
        <h1 id="title-text"> Harvey Wu </h1>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <div class="icon-bar">
          <a href="#" class="linkedin">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#" class="github">
            <i class="fa fa-github"></i>
          </a>
          <a href="#" class="email">
            <i class="fa fa-envelope"></i>
          </a>
        </div>
      </div>
      <div>
        <h1> Testing </h1>
      </div>
    </>
  );
}

export default App;
