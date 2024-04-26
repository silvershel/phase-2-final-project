import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import ProjectList from "./components/ProjectList";

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {

        console.log('useEffect Fired')

        fetch("http://localhost:8000/projects")
        .then((r) => r.json())
        .then((projects) => setProjects(projects))
    }, []);

    return (
      <div className="app">
          <Header />
          <Search />
          <ProjectList projects={projects} />
      </div>
    );
}

export default App;