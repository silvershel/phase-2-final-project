import { useState, useEffect } from "react";
import './App.css';
import Home from "./pages/Home";
import NewProject from "./pages/NewProject";
import About from "./pages/About";

function App() {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/projects/?_limit=6`) 
        // "?_limit=6" is used to load a maximum of 6 projects on the page.
        .then((r) => r.json())
        .then((projectData) => {
            setProjects(projectData);
            setFilteredProjects(projectData);
        })
    }, []);

    function handleSearch(searchValue) {
        let searchedProjects =  projects.filter((project) => {
            return project.name.toLowerCase().includes(searchValue.toLowerCase());
        })
        setFilteredProjects(searchedProjects);
    }
    
    return(
        <div>
            <Home projects={filteredProjects} onSearch={handleSearch} />
        </div>
    )
}

export default App;

// STRETCH GOALS
    // Display projects by most recently worked on