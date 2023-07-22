import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Construction Projects</h1>
      </header>
      <main>
        <div className="dashboard">
          <h2>Welcome to Construction Projects Dashboard!</h2>
          <p>
            Welcome to Construction Projects Dashboard! This app allows
            you to manage all your construction projects in one place. You can
            add new projects, view existing ones, and even download project
            details as PDF. To get started, click on the "add project" button to
            enter the project details, including the project name, description,
            cost, and time to construct. You can also upload relevant project
            documents in PDF format. Once you've added some projects, click on
            the "View Projects" button to see the list of all your construction
            projects. From there, you can view project details and download
            project information as PDF for easy sharing with your team or
            clients.Happy managing!
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;

