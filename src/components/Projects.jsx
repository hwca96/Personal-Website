import { Button } from "react-bootstrap";

function Projects() {
  return (
    <>
      <h2 className="title"> Personal Projects </h2>
      <div className="project-panel">
        <h2 className="job-title">Research Paper Semantic Search</h2>
        <h3 className="test"> Description: </h3>
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
        <h3 className="title"> Technologies </h3>
        <h3 className="title"> Links </h3>
        <div className="project-buttons">
          <Button
            variant="outline-info"
            className="project-buttons"
            href="/personal-website/semantic-search-demo"
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
        <h3 className="title"> Technologies </h3>
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
    </>
  );
}

export default Projects;
