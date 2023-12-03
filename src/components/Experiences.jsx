import { Accordion } from "react-bootstrap";

function Experiences() {
  return (
    <>
      <h2 className="title"> Work Experiences </h2>
      <Accordion
        alwaysOpen
        defaultActiveKey={["0", "1", "2"]}
        className="mx-auto"
        id="experience-accordion"
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4>Data Analyst</h4>
          </Accordion.Header>
          <Accordion.Body className="job-description">
            <h4>Landsure Systems - Vancouver, BC</h4>
            <h5>September 2022 - May 2023</h5>
            <ul>
              <li>
                Developed a robust machine-learning pipeline in Python with high
                sensitivity and precision to detect discriminatory covenants
                within historical land title documents, identified over 300
                instances for correction in a small subset of data.
              </li>
              <li>
                Designed a customized data labelling desktop application with
                text similarity grouping, improving the manual data labelling
                process by over 150%.
              </li>
              <li>
                Integrated advanced text processing techniques (sentiment
                analysis, named entity recognition) using NLP libraries and
                frameworks.
              </li>
              <li>
                Demonstrated proficiency in leveraging key AWS services in
                machine learning pipelines, including SageMaker, Lambda, S3,
                Textract, SNS, SQS, and OpenSearch.
              </li>
              <li>
                Conducted research on emerging technologies (LLMs, blockchain,
                graph databases) to explore their business application.
              </li>
              <li>
                Presented research findings to executives in a clear and
                effective manner, providing valuable insights into the related
                strategic implications and opportunities.
              </li>
              <li>
                Managed Power BI dashboard to facilitate data analytics across
                the organization, providing valuable insights into different
                business problems.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h4>Product Owner & Content Engineer</h4>
          </Accordion.Header>
          <Accordion.Body className="job-description">
            <h4>Vizzion Inc. - North Vancouver, BC</h4>
            <h5>July 2020 - September 2021</h5>
            <ul>
              <li>
                Conducted meticulous quality control reviews to ensure the
                accuracy and integrity of a substantial global traffic camera
                database.
              </li>
              <li>
                Automated content management tasks using Python, integrating
                with multiple DOT APIs and online data sources, resulting in a
                productivity increase of 300%
              </li>
              <li>
                Utilized Tableau, Power BI, and Excel for comprehensive data
                analytics, delivering valuable insights to support fulfillment
                operations.
              </li>
              <li>
                Collaborated effectively with cross-functional teams to evaluate
                development strategies through active participation in product
                selection, iteration planning, and scrum meetings.
              </li>
              <li>
                Provided critical system administration support, including
                ransomware recovery, hardware/software upgrades, and data
                backups.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
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
      </Accordion>
    </>
  );
}

export default Experiences;
