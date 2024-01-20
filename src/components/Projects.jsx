import { Button, Accordion } from "react-bootstrap";
import pandaslogo from "../../assets/pandas.svg";
import hflogo from "../../assets/hf-logo.svg";
import gradiologo from "../../assets/gradio-icon.svg";
import ultralyticlogo from "../../assets/ultralytics.svg";

function Projects() {
  return (
    <>
      <h1 className="title"> Personal Projects </h1>
      <div className="project-panel">
        <h2 className="job-title">Research Paper Semantic Search</h2>
        <h3> Description: </h3>
        <p>
          Developed a semantic search engine for research papers using
          sentence-transformer's all-MiniLM-L6-v2 model, MongoBD Atlas,
          HuggingFace Hub, ang Gradio. This project aims to implement an
          alternative way to search for research papers based on meaning and
          context of their queries, rather than just keywords. A demo is
          available on HuggingFace Hub{" "}
          <a
            href="https://huggingface.co/spaces/hwca96/CS_Paper_Abstract_Semantic_Search"
            target="_blank"
          >
            here
          </a>
          .
        </p>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h6 className="title">Technologies</h6>
            </Accordion.Header>
            <Accordion.Body className="project-technologies-icons">
              <div className="tech-card">
                <i className="devicon-python-plain colored tech-image"></i>
                <p className="title">Python</p>
              </div>
              <div className="tech-card">
                <img src={pandaslogo} className="tech-image" />
                <p className="title">Pandas</p>
              </div>
              <div className="tech-card">
                <i className="devicon-mongodb-plain colored tech-image"></i>
                <p className="title">MongoDB</p>
              </div>
              <div className="tech-card">
                <img src={hflogo} className="tech-image" />
                <p className="title">HuggingFace</p>
              </div>
              <div className="tech-card">
                <img src={gradiologo} className="tech-image" />
                <p className="title">Gradio</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <h3 className="title"> Links </h3>
        <div className="project-buttons">
          <Button
            variant="outline-info"
            className="project-buttons"
            href="/personal-website/#/semantic-search"
            target="_blank"
          >
            {" "}
            Embedded Demo{" "}
          </Button>{" "}
          <Button
            variant="outline-light"
            href="https://github.com/hwca96/research-paper-semantic-search"
            target="_blank"
          >
            {" "}
            GitHub{" "}
          </Button>{" "}
          <Button
            variant="outline-warning"
            href="https://huggingface.co/spaces/hwca96/CS_Paper_Abstract_Semantic_Search"
            target="_blank"
          >
            {" "}
            HuggingFace Hub{" "}
          </Button>
        </div>
      </div>

      <div className="project-panel">
        <h2 className="job-title">Personal Website</h2>
        <h3 className="test"> Description: </h3>
        <p>
          A personal website to showcase my skills and projects. This website is
          built using React, Javascript, HTML, and CSS. It is hosted on GitHub
          Pages.
        </p>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h6 className="title">Technologies</h6>
            </Accordion.Header>
            <Accordion.Body className="project-technologies-icons">
              <div className="tech-card">
                <i className="devicon-react-plain colored tech-image"></i>
                <p className="title">React</p>
              </div>
              <div className="tech-card">
                <i className="devicon-html5-plain colored tech-image"></i>
                <p className="title">HTML</p>
              </div>
              <div className="tech-card">
                <i className="devicon-css3-plain colored tech-image"></i>
                <p className="title">CSS</p>
              </div>
              <div className="tech-card">
                <i className="devicon-github-plain tech-image"></i>
                <p className="title">GitHub Pages</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <h3 className="title"> Links </h3>
        <div className="project-buttons">
          <Button
            variant="outline-info"
            className="project-buttons"
            href="https://hwca96.github.io/personal-website/"
            target="_blank"
          >
            {" "}
            Website{" "}
          </Button>{" "}
          <Button
            variant="outline-light"
            href="https://github.com/hwca96/personal-website"
            target="_blank"
          >
            {" "}
            GitHub{" "}
          </Button>
        </div>
      </div>

      <div className="project-panel">
        <h2 className="job-title">Computer Vision Traffic Counter</h2>
        <h3 className="test"> Description: </h3>
        <p>
          This project is a computer vision-based traffic counter that uses
          image processing techniques to analyze video footage and count the
          number of vehicles passing through a specified area. It can be used
          for various applications such as traffic monitoring, congestion
          analysis, and traffic flow optimization.
        </p>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h6 className="title">Technologies</h6>
            </Accordion.Header>
            <Accordion.Body className="project-technologies-icons">
              <div className="tech-card">
                <i className="devicon-python-plain colored tech-image"></i>
                <p className="title">Python</p>
              </div>
              <div className="tech-card">
                <i className="devicon-opencv-plain colored tech-image"></i>
                <p className="title">OpenCV</p>
              </div>
              <div className="tech-card">
                <img src={ultralyticlogo} className="tech-image" />
                <p className="title">Ultralytics (YOLOv8)</p>
              </div>
              <div className="tech-card">
                <i className="devicon-pytorch-original colored tech-image"></i>
                <p className="title">PyTorch</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <h3 className="title"> Links </h3>
        <div className="project-buttons">
          <Button
            variant="outline-light"
            href="https://github.com/hwca96/cv-traffic-counter"
            target="_blank"
          >
            {" "}
            GitHub{" "}
          </Button>
        </div>
      </div>
    </>
  );
}

export default Projects;
