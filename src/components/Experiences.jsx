import { Accordion } from "react-bootstrap";

function Experiences() {
  return (
    <>
      <h1 className="title"> Work Experiences </h1>
      <div className="experience-panel-0">
        <h2 className="job-title">Data Analyst / Developer Co-op</h2>
            <h4 className="title">Landsure Systems - Vancouver, BC</h4>
            <h5 className="title">September 2022 - May 2023</h5>
            <ul className="list-items">
              <li>
                <p>
                Developed a robust machine-learning pipeline in Python with high
                sensitivity and precision to detect discriminatory covenants
                within historical land title documents, identified over 300
                instances for correction in a small subset of data.
                </p> 
              </li>
              <li>
                <p>
                Designed a customized data labelling desktop application with
                text similarity grouping, improving the manual data labelling
                process by over 150%.
                </p>
              </li>
              <li>
                <p>
                  Integrated advanced text processing techniques (sentiment
                analysis, named entity recognition) using NLP libraries and
                frameworks.
                </p>               
              </li>
              <li>
                <p>
                  Demonstrated proficiency in leveraging key AWS services in
                machine learning pipelines, including SageMaker, Lambda, S3,
                Textract, SNS, SQS, and OpenSearch.
                </p>               
              </li>
              <li>
                <p>
                  Conducted research on emerging technologies (LLMs, blockchain,
                graph databases) to explore their business application.
                </p>               
              </li>
              <li>
                <p>
                  Presented research findings to executives in a clear and
                effective manner, providing valuable insights into the related
                strategic implications and opportunities.
                </p>               
              </li>
              <li>
                <p>
                  Managed Power BI dashboard to facilitate data analytics across
                the organization, providing valuable insights into different
                business problems.
                </p>             
              </li>
            </ul>
      </div>
      <div className="experience-panel-0">
        <h2 className="job-title">Product Owner & Content Engineer</h2>
            <h4 className="title">Vizzion Inc. - North Vancouver, BC</h4>
            <h5 className="title">July 2020 - September 2021</h5>
            <ul className="list-items">
              <li>
                <p>
                Conducted meticulous quality control reviews to ensure the
                accuracy and integrity of a substantial global traffic camera
                database.
                </p> 
              </li>
              <li>
                <p>
                Automated content management tasks using Python, integrating
                with multiple DOT APIs and online data sources, resulting in a
                productivity increase of 300%.
                </p>
              </li>
              <li>
                <p>
                Utilized Tableau, Power BI, and Excel for comprehensive data
                analytics, delivering valuable insights to support fulfillment
                operations.
                </p>               
              </li>
              <li>
                <p>
                Collaborated effectively with cross-functional teams to evaluate
                development strategies through active participation in product
                selection, iteration planning, and scrum meetings.
                </p>               
              </li>
              <li>
                <p>
                Provided critical system administration support, including
                ransomware recovery, hardware/software upgrades, and data
                backups.
                </p>               
              </li>
            </ul>
      </div>
      <div className="experience-panel-0">
        <h2 className="job-title">Analytical Chemist Co-op</h2>
            <h4 className="title">PHSA - Vancouver, BC</h4>
            <h5 className="title">May 2019 - December 2019</h5>
            <ul className="list-items">
              <li>
                <p>
                Conducted comprehensive research and developed innovative
                methodologies for drug compound identification in blood
                matrices, contributing to forensic toxicology analysis.
                </p> 
              </li>
              <li>
                <p>
                Created and managed standard operating procedures (SOPs) and
                validation reports with meticulous attention to detail, ensuring
                accuracy, consistency, and compliance.
                </p>
              </li>
              <li>
                <p>
                Performed street drug analysis and collaborated with researchers
                resulting in publishing discovery of emerging illicit drugs in
                local street supplies.
                </p>               
              </li>
            </ul>
      </div>
      {/* 
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h4>Analytical Chemist</h4>
          </Accordion.Header>
          <Accordion.Body className="job-description">
            <h4>PHSA - Vancouver, BC</h4>
            <h5>May 2019 - December 2019</h5>
            <ul>
              <li>
                Conducted comprehensive research and developed innovative
                methodologies for drug compound identification in blood
                matrices, contributing to forensic toxicology analysis.
              </li>
              <li>
                Automated content management tasks using Python, integrating
                with multiple DOT APIs and online data sources, resulting in a
                productivity increase of 300%
              </li>
              <li>
                Created and managed standard operating procedures (SOPs) and
                validation reports with meticulous attention to detail, ensuring
                accuracy, consistency, and compliance.
              </li>
              <li>
                Performed street drug analysis and collaborated with researchers
                resulting in publishing discovery of emerging illicit drugs in
                local street supplies.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion> */}
    </>
  );
}

export default Experiences;
