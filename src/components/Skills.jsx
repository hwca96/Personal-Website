import matplotliblogo from "../../assets/matplotlib.svg"
import scikitlearnlogo from "../../assets/scikitlearn.svg"
import excellogo from "../../assets/excel.svg"
import powerbilogo from "../../assets/powerbi.svg"
import tableaulogo from "../../assets/tableau.svg"
import pandaslogo from "../../assets/pandas.svg"

function Skills() {
  return (
    <>
      <h1 className="title"> Skills </h1>
      <div className="skill-container">
        <h2 className="skill-title">Programming</h2>
        <div className="skill-info">
          <div className="skill-card">
            <i className="devicon-c-plain colored skill-image"></i>
            <h3 className="title">C/C++</h3>
          </div>
          <div className="skill-card">
            <i className="devicon-css3-plain colored skill-image"></i>
            <h3 className="title">CSS</h3>
          </div>
          <div className="skill-card">
            <i className="devicon-html5-plain colored skill-image"></i>
            <h3 className="title">HTML</h3>
          </div>
          <div className="skill-card">
            <i className="devicon-typescript-plain colored skill-image"></i>
            <h3 className="title">TypeScript</h3>
          </div>
          <div className="skill-card">
            <i className="devicon-javascript-plain colored skill-image"></i>
            <h3 className="title">JavaScript</h3>
          </div>
          <div className="skill-card">
            <i className="devicon-java-plain colored skill-image"></i>
            <h3 className="title">Java</h3>
          </div>
          <div className="skill-card">
            <i className="devicon-python-plain colored skill-image"></i>
            <h3 className="title">Python</h3>
          </div>
        </div>
        <h2 className="skill-title">Databases</h2>
        <div className="skill-info">
          <div className="skill-card">
            <i className="devicon-mongodb-plain colored skill-image"></i>
            <h3 className="title">MongoDB</h3>
          </div>
          <div className="skill-card">
            <i className="devicon-sqlite-plain colored skill-image"></i>
            <h3 className="title">SQLite</h3>
          </div>
          <div className="skill-card">
            <i className="devicon-mysql-plain colored skill-image"></i>
            <h3 className="title">MySQL</h3>
          </div>
          <div className="skill-card">
            <i className="devicon-postgresql-plain colored skill-image"></i>
            <h3 className="title">PostgreSQL</h3>
          </div>
        </div>
        <h2 className="skill-title">Data Analytics</h2>
        <div className="skill-info">
        <div className="skill-card">
            <img src={tableaulogo} className="skill-image"/>
            <h3 className="title">Tableau</h3>
          </div>
          <div className="skill-card">
            <img src={powerbilogo} className="skill-image"/>
            <h3 className="title">PowerBI</h3>
          </div>
          <div className="skill-card">
            <img src={excellogo} className="skill-image"/>
            <h3 className="title">Excel</h3>
          </div>
          <div className="skill-card">
            <i className="devicon-jupyter-plain colored skill-image"></i>
            <h3 className="title">Jupyter</h3>
          </div>
        <div className="skill-card">
            <img src={matplotliblogo} className="skill-image" />
            <h3 className="title">Matplotlib</h3>
          </div>
        <div className="skill-card">
            <i className="devicon-numpy-plain colored skill-image"></i>
            <h3 className="title">Numpy</h3>
          </div>
          <div className="skill-card">
          <img src={pandaslogo} className="skill-image" />
            <h3 className="title">Pandas</h3>
          </div>
        </div>
        <h2 className="skill-title">Machine Learning / AI</h2>
        <div className="skill-info">
        <div className="skill-card">
            <i className="devicon-opencv-plain colored skill-image"></i>
            <h3 className="title">OpenCV</h3>
          </div>
        <div className="skill-card">
            <img src={scikitlearnlogo} className="skill-image"/>
            <h3 className="title">scikit-learn</h3>
          </div>
        <div className="skill-card">
            <i className="devicon-tensorflow-original colored skill-image"></i>
            <h3 className="title">TensorFlow</h3>
          </div>
        <div className="skill-card">
            <i className="devicon-pytorch-original colored skill-image"></i>
            <h3 className="title">PyTorch</h3>
          </div>
        </div>
        <h2 className="skill-title">Technologies</h2>
        <div className="skill-info">
        <div className="skill-card">
            <i className="devicon-jira-plain colored skill-image"></i>
            <h3 className="title">Jira</h3>
          </div>
        <div className="skill-card">
            <i className="devicon-git-plain colored skill-image"></i>
            <h3 className="title">Git</h3>
          </div>
        <div className="skill-card">
            <i className="devicon-flask-original colored skill-image"></i>
            <h3 className="title">Flask</h3>
          </div>
          <div className="skill-card">
            <i className="devicon-react-original colored skill-image"></i>
            <h3 className="title">React</h3>
          </div>
          <div className="skill-card">
            <i className="devicon-azure-plain colored skill-image"></i>
            <h3 className="title">Azure</h3>
          </div>
        <div className="skill-card">
            <i className="devicon-amazonwebservices-original colored skill-image"></i>
            <h3 className="title">AWS</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
