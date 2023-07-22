import React from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  Text,
} from "@react-pdf/renderer";

// Create a component to render the PDF content for each project
const ProjectDetailsPDF = ({ project }) => (
  <Document>
    <Page>
      <View>
        <Text>{project.description}</Text>
        <Text>Cost: {project.cost}</Text>
        <Text>Time to Construct: {project.timeToConstruct}</Text>
      </View>
    </Page>
  </Document>
);

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      <h2>Project List</h2>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map((project, index) => (
          <div key={index}>
            <h3>{project.description}</h3>
            <PDFDownloadLink
              document={<ProjectDetailsPDF project={project} />}
              fileName={`${project.description}.pdf`}
            >
              Download PDF
            </PDFDownloadLink>
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectList;
