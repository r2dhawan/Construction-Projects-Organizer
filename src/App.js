import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ProjectList from "./ProjectList";

function App() {
  const [projects, setProjects] = useState([]);

  const handleProjectSubmit = (project) => {
    setProjects((prevProjects) => [...prevProjects, project]);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Construction Projects</h1>
          <nav>
            <Link to="/">Add project</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/projects">View Projects</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={<Home handleProjectSubmit={handleProjectSubmit} />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/projects"
              element={<ProjectList projects={projects} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home({ handleProjectSubmit }) {
  const [projectDetails, setProjectDetails] = useState({
    description: "",
    cost: "",
    timeToConstruct: "",
    pdfFile: null,
  });

  const handleDescriptionChange = (e) => {
    setProjectDetails((prevState) => ({
      ...prevState,
      description: e.target.value,
    }));
  };

  const handleCostChange = (e) => {
    setProjectDetails((prevState) => ({
      ...prevState,
      cost: e.target.value,
    }));
  };

  const handleTimeToConstructChange = (e) => {
    setProjectDetails((prevState) => ({
      ...prevState,
      timeToConstruct: e.target.value,
    }));
  };

  const handlePdfFileChange = (e) => {
    setProjectDetails((prevState) => ({
      ...prevState,
      pdfFile: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleProjectSubmit(projectDetails);
    setProjectDetails({
      description: "",
      cost: "",
      timeToConstruct: "",
      pdfFile: null,
    });
  };

  return (
    <div className="home">
      <h2>Home</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={projectDetails.description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cost">Cost:</label>
          <input
            type="text"
            id="cost"
            value={projectDetails.cost}
            onChange={handleCostChange}
            required
          />
        </div>
        <div>
          <label htmlFor="timeToConstruct">Time to Construct:</label>
          <input
            type="text"
            id="timeToConstruct"
            value={projectDetails.timeToConstruct}
            onChange={handleTimeToConstructChange}
            required
          />
        </div>
        <div>
          <label htmlFor="pdfFile">Upload PDF:</label>
          <input
            type="file"
            id="pdfFile"
            accept=".pdf"
            onChange={handlePdfFileChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
