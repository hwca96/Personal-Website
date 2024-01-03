import NavBar from "./Navbar";
const SemanticSearchDemo = () => {
  return (
    <div>
      <NavBar />
      <div id="demo">
        <h1 className="title">Semantic Search Demo</h1>
        <iframe
          src="https://hwca96-cs-paper-abstract-semantic-search.hf.space"
          id="demo-iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default SemanticSearchDemo;
